import React from 'react';
import { useForm } from "react-hook-form";

import * as S from './styled';
import ThirtyOff from '../../assets/images/30off.png';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => { ;
    localStorage.setItem('lead', JSON.stringify(data));
    alert('Cadastro Concluído');
  }; // your form submit function which will invoke after successful validation

  return (
    <S.FormContainer>
      <S.FormTitle>
        <S.PromotionImage>
          <img src={ThirtyOff} alt="30% de desconto" />
        </S.PromotionImage>
        <h1>  Cadastre-se e receba <br/> <span> Ofertas Exclusivas! </span> </h1>
      </S.FormTitle>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <S.FormLabel> Nome </S.FormLabel>
        <S.FormInput
          {...register("firstName", {
            required: true,
            maxLength: 20,
          })}
          placeholder="Ex: João da Silva"
          className={errors?.firstName && 'error'}
        />
        <S.Errors>
          {errors?.firstName?.type === "required" && <p>Este campo é obrigatório </p>}
          {errors?.firstName?.type === "maxLength" && (
            <p>Nome não pode exceder 20 caracteres </p>
          )}
        </S.Errors>

        <S.FormLabel>E-mail</S.FormLabel>
        <S.FormInput
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
          })}
          placeholder="Ex: joao.silva@gmail.com"
          className={errors?.email && 'error'}
        />
        <S.Errors>
          {errors?.email?.type === "required" && <p>Este campo é obrigatório </p>}
          {errors?.email?.type === "pattern" && (
            <p>Ajuste seu e-mail para prosseguir </p>
          )}
        </S.Errors>
        <S.Button type="submit"> Cadastrar </S.Button>
      </S.FormWrapper>
    </S.FormContainer>
  );
}


export default Form;
import React from 'react';
import Form from '../../components/Form';
import Countdown from '../../components/Countdown';
import teste from '../../assets/images/shape.svg';

import * as S from './styled';

function Home() {
  return (
    <S.HomeWrapper>
      <S.CountdownWrapper>
        <Countdown />
      </S.CountdownWrapper>
      <S.FormWrapper>
        <S.ShapeWrapper>
          <img src={teste} alt="Img icon"/>
        </S.ShapeWrapper>
        <Form />
      </S.FormWrapper>
    </S.HomeWrapper>
  );
}

export default Home;

import styled from 'styled-components';

export const FormContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 100px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormInput = styled.input`
  background-color: #292830;
  padding: 10px;
  width: 63%;
  border-color: var(--color-third);
  border-width: 0px 0px 1px 0px;
  border-bottom: 1px solid;
  color: #818083;

  &:focus {
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    outline: 0;
  }

  &.error {
    border-color: var(--color-secondary);
  }
`;

export const Errors = styled.div`
  height: 30px;
  color: #9C9BA1;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.7em;
  color: var(--color-secondary);
`;

export const Button = styled.button`
  padding: 10px 15px;
  background: var(--color-secondary);
  cursor: pointer;
  transition: 0.25s;
  width: 200px;
  height: 60px;
  margin-top: 12px;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-secondary);
  }
`;

export const FormLabel = styled.label`
  font-family: "DM Sans", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const PromotionImage = styled.div`
`;
export const FormTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3em;
  position: relative;

  h1 {
    margin-top: -40px;

    span {
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--color-primary);
  color: var(--color-white);
  min-height: 100vh;
  display: flex;
  max-width: 1650px;
  margin: 0 auto;
`;

export const CountdownWrapper = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px 0 5px -2px rgb(0 0 0 / 10%);
`;

export const FormWrapper = styled.div`
  width: 50%;
  height: 100vh;
`;


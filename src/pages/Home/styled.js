import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  max-width: 1650px;
  margin: 0 auto;

  @media(min-width: 800px) {
    min-height: 100vh;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;

export const CountdownWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px 0 5px -2px rgb(0 0 0 / 10%);

  @media(min-width: 800px) {
    height: 100vh;
  }

  @media(max-width: 800px) {
    width: 100%;
    padding-top: 20%;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  position: relative;

  @media(min-width: 800px) {
    height: 100vh;
  }

  @media(max-width: 800px) {
    width: 100%;
    padding-bottom: 100px;
  }
`;

export const ShapeWrapper = styled.div`
  position: absolute;
  width: 96%;
  /* height: 100%; */
  right: 0;
  bottom: 0;
  img {
    object-fit: cover;
  }
`;
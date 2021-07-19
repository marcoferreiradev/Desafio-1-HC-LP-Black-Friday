import React from 'react';
import Form from '../../components/Form';
import Countdown from '../../components/Countdown';

import * as S from './styled';

function Home() {
  return (
    <S.HomeWrapper>
      <S.CountdownWrapper>
        <Countdown />
      </S.CountdownWrapper>
      <S.FormWrapper>
        <Form />
      </S.FormWrapper>
    </S.HomeWrapper>
  );
}

export default Home;

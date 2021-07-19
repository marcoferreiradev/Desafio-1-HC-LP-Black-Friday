import React from "react";

import IconBlackFriday from '../../assets/icons/black-friday.svg';
import * as S from './styled';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <S.ImgBlackFriday src={IconBlackFriday} alt="Black Friday" />
        <S.CountdownWrapper>
          <S.CountdownItem>
            <S.CountdownNumber>
              {days}
            </S.CountdownNumber>
            <S.CountdownLabel>
              Dias
            </S.CountdownLabel>
          </S.CountdownItem>
          <S.CountdownItem>
            <S.CountdownNumber>
              {hours}
            </S.CountdownNumber>
            <S.CountdownLabel>
              Horas
            </S.CountdownLabel>
          </S.CountdownItem>
          <S.CountdownItem>
            <S.CountdownNumber>
              {minutes}
            </S.CountdownNumber>
            <S.CountdownLabel>
              Minutos
            </S.CountdownLabel>
          </S.CountdownItem>
          <S.CountdownItem>
            <S.CountdownNumber>
              {seconds}
            </S.CountdownNumber>
            <S.CountdownLabel>
              Segundos
            </S.CountdownLabel>
          </S.CountdownItem>
        </S.CountdownWrapper>
      </>
    );
  }
};

const Countdown = () => (
  <S.CountdownContainer
    date={"2021-11-26T00:17:33.292Z"}
    renderer={renderer}
    daysInHours={false}
  />
)

export default Countdown;

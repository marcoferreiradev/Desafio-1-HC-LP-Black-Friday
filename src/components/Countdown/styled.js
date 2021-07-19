import styled from 'styled-components'
import Countdown from "react-countdown";

export const CountdownContainer = styled(Countdown)``;

export const CountdownWrapper = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 20px;

  li {
    width: calc( 100% / 4);
  }
`;

export const CountdownItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: #292830;
  padding: 25px;
  margin-right: 15px;
  margin-left: 15px;

  @media(max-width: 800px) {
    margin-right: 5px;
    margin-left: 5px;
    padding: 10px 0;
  }
`;

export const CountdownNumber = styled.span`
  font-family: "Oswald", Sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.3em;
  color: var(--color-secondary);
  margin: 0 auto;

  @media(max-width: 800px) {
    font-size: 25px;
  }
`;

export const CountdownLabel = styled.p`
  color: #8B8A8D;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 1px;
  margin: 0 auto;

  @media(max-width: 800px) {
    font-size: 9px;
  }
`;

export const ImgBlackFriday = styled.img`
  width: 70%;
  margin: 0 auto 20px;
`;
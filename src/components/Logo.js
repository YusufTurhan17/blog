import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledText = styled.span`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color};

  &::after {
    content: "";
    width: 100%;
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.color};
    margin-top: 7px;
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 600px) {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 100%;
    margin-top: 3px;
    display: flex;

    justify-content: center;
  }
`;

const Logo = () => (
  <Link className="flexShring0" to="/">
    <StyledText>Yusuf Turhan</StyledText>
  </Link>
);

export default Logo;

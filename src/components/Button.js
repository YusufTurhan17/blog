import styled from "styled-components";

const StyledButton = styled.button`
  padding: 20px 50px;
  border-radius: ${({ radius }) => (radius ? "100%" : "20px")};
  border: 2px solid #fff;
  color: ${({ theme, active }) =>
    active ? theme.buttonActiveColor : theme.buttonColor};
  background-color: ${({ theme, active }) =>
    active ? theme.buttonActivebg : theme.buttonbg};
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  & + & {
    margin-left: 20px;
  }
`;

export default StyledButton;

import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as LambIcon } from "../assets/icons/lamb.svg";
import { useThemeContext } from "../Context/ThemeContext";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.color};
  background-color: transparent;
  color: ${({ theme }) => theme.color};

  &:hover {
    border-color: ${({ theme }) => theme.color};
  }
`;

const SwitchTheme = () => {
  const { theme, isDark, toggleTheme } = useThemeContext();

  return (
    <StyledButton theme={theme} onClick={toggleTheme}>
      {isDark ? <LambIcon width="35px" /> : <MoonIcon width="35px" />}
    </StyledButton>
  );
};

export default SwitchTheme;

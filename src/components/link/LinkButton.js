import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { Link } from "react-router-dom";

const ArrowRight = styled(ArrowDown)`
  transform: rotate(-90deg);
`;

const StyledLinkButton = styled(Link)`
  color: ${({ theme }) => theme.color};
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const LinkButton = ({ children, className, to }) => {
  return (
    <>
      <StyledLinkButton className={className} to={to}>
        {children}
        <ArrowRight />
      </StyledLinkButton>
    </>
  );
};

export default LinkButton;

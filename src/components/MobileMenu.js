import { ReactComponent as Cross } from "../assets/icons/cross.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import styled from "styled-components";

const StyledMobileMenu = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

const MobileMenu = ({ activemenu, setActiveMenu }) => {
  const handlerchange = () => {
    setActiveMenu(!activemenu);
  };
  return (
    <StyledMobileMenu role="button" onClick={handlerchange}>
      {activemenu ? <Cross /> : <Menu />}
    </StyledMobileMenu>
  );
};

export default MobileMenu;

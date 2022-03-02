import styled from "styled-components";

import { ReactComponent as Cross } from "../assets/icons/cross.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
  overflow: hidden;
  z-index: 999;
`;

const CloseIcon = styled(Cross)`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  cursor: pointer;
  color: #fff;
`;

const Modal = ({ children, closeModal, isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <CloseIcon onClick={() => closeModal(false)} />
      {children}
    </Wrapper>
  );
};

export default Modal;

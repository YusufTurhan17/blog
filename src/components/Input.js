import styled from "styled-components";

const StyledInput = styled.input`
  background-color: rgb(46, 48, 57);
  border-radius: 8px;
  /* color:#fff; */
  display: inline-block;
  font-size: 18px;
  /* height: 50px; */
  padding: 32px 44px;
  margin-top: 20px;
  text-align: start;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid gray;
  width: 600px;
  max-width: 100%;
  ::placeholder {
    color: #fff;
  }
  &:focus {
    color: #fff;
  }
  &:hover {
    border-color: #fff;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    padding: 16px 44px;
    margin-top: 10px;
  }
`;

export default StyledInput;

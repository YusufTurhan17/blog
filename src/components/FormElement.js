import styled from "styled-components";
import Input from "./Input";

const StyledLabel = styled.label`
  /* color: #fff; */
  margin-bottom: 10px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  width: 100%;
  margin-top: 30px;
`;

const FormElement = ({ label, children }) => {
  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>

      {children}
    </StyledWrapper>
  );
};

export default FormElement;

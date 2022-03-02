import styled from "styled-components";

const StyledTextArea = styled.textarea`
  background-color: rgb(46, 48, 57);
  border-radius: 8px;
  /* color:#fff; */
  display: inline-block;
  font-size: 18px;
  /* height: 50px; */
  padding: 20px 44px 150px 20px;
  text-align: start;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid gray;
  max-width: 600px;
  width: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  width: 100%;

  margin: 0 0 40px 0;
`;

const TextArea = ({ name }) => {
  return (
    <StyledWrapper>
      <StyledTextArea name={name} />
    </StyledWrapper>
  );
};

export default TextArea;

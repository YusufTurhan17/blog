import styled from "styled-components";

const StyledForm = styled.form`

`

const Form = ({children,onSubmit}) => {
    return <StyledForm   onSubmit={onSubmit}>{children}</StyledForm>
}


export default Form
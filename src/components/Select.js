import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 10px;
`;
const StyledOption = styled.option``;

const Select = ({ value, onChange, className }) => {
  return (
    <StyledSelect className={className} value={value} onChange={onChange}>
      <StyledOption value="tr">TR</StyledOption>
      <StyledOption value="en">EN</StyledOption>
    </StyledSelect>
  );
};

export default Select;

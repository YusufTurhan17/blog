import styled from "styled-components";

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default SectionHeader;

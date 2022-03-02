import styled from "styled-components";

export { default as SectionHeader } from "./SectionHeader";

const Section = styled.section`
  margin: 100px 0;
  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

export default Section;

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
  grid-gap: ${(props) => props.gap ?? "0px"};
  justify-items: start;
  justify-content: start;
  align-items: ${(props) => props.alignItems ?? "start"};
  height: ${(props) => props.height ?? "auto"};
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;

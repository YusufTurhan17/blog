import styled from "styled-components";

const View = styled.div`
  width: ${(props) => props.width ?? "100%"};
  align-items: ${(props) => props.alignItems ?? "flex-start"};
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  display: ${(props) => props.display ?? "block"};
  flex-direction: ${(props) => props.direction ?? "row"};
  flex-wrap: ${(props) => props.wrap ?? "wrap"};
  margin-bottom: ${(props) => props.marginBottom ?? "0"};
  grid-area: ${(props) => props.gridArea ?? ""};
  @media (max-width: 600px) {
    flex-wrap: nowrap;
    overflow: auto;
    padding-bottom: 15px;
  }
`;

export default View;

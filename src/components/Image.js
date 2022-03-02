import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  max-width: ${(props) => props.maxWidth ?? "auto"};
  object-fit: ${(props) => props.objectFit ?? "contain"};

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

export default Image;

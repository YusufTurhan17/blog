import styled from "styled-components";
import React from "react";

const SIZES = {
  small: "20px",
  medium: "30px",
  large: "40px",
};

const Title = styled(({ tagName = "h1", children, ...props }) =>
  React.createElement(tagName, props, children)
)`
  font-size: ${({ size }) => SIZES[size] ?? SIZES.small};
  color: ${({ theme }) => theme.color};
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export default Title;

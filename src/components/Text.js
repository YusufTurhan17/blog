import styled from "styled-components";
import { createElement } from "react";

const SIZES = {
  small: "20px",
  medium: "30px",
  large: "40px",
};
const Text = styled(({ tagName = "p", children, ...props }) =>
  createElement(tagName, props, children)
)`
  font-size: ${({ size }) => SIZES[size] ?? SIZES.small};
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export default Text;

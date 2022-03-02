import Lottie from "react-lottie-player";
import styled from "styled-components";
const StyledAnimation = styled(Lottie)`
  width: 600px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Animation = ({ animationdata, style }) => (
  <StyledAnimation>
    {" "}
    <Lottie loop animationData={animationdata} play />
  </StyledAnimation>
);

export default Animation;

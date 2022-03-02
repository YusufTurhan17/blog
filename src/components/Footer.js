import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import SocialBox from "./SocialBox";

const StyledFooter = styled(Container)`
  max-width: 1535px;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 100px 15px 50px 15px;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialBox />
    </StyledFooter>
  );
};

export default Footer;

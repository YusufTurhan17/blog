import styled from "styled-components";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import View from "./View";
import { useTranslation } from "react-i18next";

import Title from "./Title";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};

  & + & {
    margin-left: 10px;
  }
`;

const StyledSocialMedias = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SocialBox = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Title>{t("sosyalmedya")}</Title>
      <StyledSocialMedias>
        <StyledLink target="_blank" href="http://www.twitter.com">
          <Twitter />
        </StyledLink>
        <StyledLink target="_blank" href="http://www.linkedin.com">
          <Linkedin />
        </StyledLink>
        <StyledLink target="_blank" href="http://www.instagram.com">
          <Instagram />
        </StyledLink>
        <StyledLink target="_blank" href="http://www.github.com">
          <Github />
        </StyledLink>
      </StyledSocialMedias>
    </View>
  );
};

export default SocialBox;

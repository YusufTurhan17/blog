import Container from "../components/Container";

import Section from "../components/section/Section";
import View from "../components/View";
import Grid from "../components/Grid";
import Image from "../components/Image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../Context/ThemeContext";
import ProfilePhoto1 from "../assets/images/profile1.png";
import ProfilePhoto2 from "../assets/images/profile2.jpeg";

import Text from "../components/Text";

const StyledImage = styled(Image)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const About = () => {
  const { t } = useTranslation();
  const { isDark } = useThemeContext();

  return (
    <>
      <Section>
        <Container>
          <Grid templateColumns="1fr auto" gap="70px" alignItems="center">
            <View>
              <StyledImage
                maxWidth="300px"
                src={isDark ? ProfilePhoto1 : ProfilePhoto2}
                alt="img"
              />
            </View>
            <View>
              <Text size="medium">{t("hakkimda")}</Text>
            </View>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default About;

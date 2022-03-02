import Container from "../components/Container";

import Section, { SectionHeader } from "../components/section/Section";
import View from "../components/View";
import Grid from "../components/Grid";
import Title from "../components/Title";
import Image from "../components/Image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import ProfilePhoto1 from "../assets/images/profile1.png";
import Text from "../components/Text";

const StyledImage = styled(Image)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <Container>
          <Grid templateColumns="1fr auto" gap="70px" alignItems="center">
            <View>
              <StyledImage maxWidth="400px" src={ProfilePhoto1} alt="img" />
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

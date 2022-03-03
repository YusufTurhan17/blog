import Container from "../components/Container";
import Section, { SectionHeader } from "../components/section/Section";
import View from "../components/View";
import Grid from "../components/Grid";
import Title from "../components/Title";
import Image from "../components/Image";
import Button from "../components/Button";
import ProfilePhoto1 from "../assets/images/profile1.png";
import ProfilePhoto2 from "../assets/images/profile2.jpeg";
import StyledLinkButton from "../components/link/LinkButton";
import LinkButton from "../components/link/LinkButton";
import Posts from "../components/Posts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Animation from "../components/Animation";
import styled from "styled-components";
import codeanimation from "../assets/animation/79583-webapp.json";
import Text from "../components/Text";
import { useThemeContext } from "../Context/ThemeContext";

const StyledContainer = styled(Grid)`
  @media (max-width: 600px) {
    gap: 20px 0px;
  }
`;
const StyledImage = styled(Image)`
  display: block;
  border-radius: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Home = () => {
  const { t } = useTranslation(["home"]);
  const { isDark } = useThemeContext();

  return (
    <>
      <Section>
        <Container>
          <StyledContainer
            templateColumns="1fr auto"
            alignItems="center"
            gap="100px"
          >
            <View>
              <Title size="large">{t("gelistirme")}</Title>
              <Link to="/blog">
                <Button className="mt-40">Blog</Button>
              </Link>
            </View>
            <View>
              <Animation animationdata={codeanimation} />
            </View>
          </StyledContainer>
        </Container>
      </Section>

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

              <LinkButton to="/about" className="mt-20">
                {t("tumunugoruntule")}
              </LinkButton>
            </View>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <View>
              <Title tagName="h3" size="large">
                {t("posttitle")}
              </Title>
            </View>
            <View>
              <StyledLinkButton className="floatRight" to="/blog">
                {t("tumunugoruntule")}
              </StyledLinkButton>
            </View>
          </SectionHeader>

          <Grid templateColumns="1fr 1fr 1fr 1fr" gap="20px">
            <Posts maxPost={4} />
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Home;

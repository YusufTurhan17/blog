import Photo from "../components/Photo";
import Container from "../components/Container";
import Section from "../components/section/Section";
import Grid from "../components/Grid";
import View from "../components/View";
import Animation from "../components/Animation";
import codeanimation from "../assets/animation/photo.json";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";

const Photos = () => {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <Container>
          <Grid templateColumns="1fr auto" alignItems="center" gap="100px">
            <View>
              <Title size="large">{t("fotograflarim")}</Title>
            </View>

            <View>
              <Animation animationdata={codeanimation}></Animation>
            </View>
          </Grid>
        </Container>
      </Section>
      <Container>
        <Photo peerPageCount={8} />
      </Container>
    </>
  );
};

export default Photos;

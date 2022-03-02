import emailjs from "emailjs-com";

import Container from "../components/Container";

import Section from "../components/section/Section";

import View from "../components/View";
import Title from "../components/Title";
import TextArea from "../components/TextArea";
import FormElement from "../components/FormElement";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Grid from "../components/Grid";
import { useTranslation } from "react-i18next";
import Animation from "../components/Animation";
import codeanimation from "../assets/animation/contact.json";
import styled from "styled-components";

const StyledContainer = styled(Grid)`
  grid-template-areas: "form animation";
  @media (max-width: 600px) {
    grid-template-areas: "animation" "form";
    gap: 0;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_MAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_MAIL_TOKEN
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mesajınız Gönderildi.");
        },
        (error) => {
          console.log(error.text);
          alert("Mesajınız Gönderilemedi!");
        }
      );
  };

  return (
    <Section>
      <Container>
        <StyledContainer
          templateColumns="1fr auto"
          alignItems="center"
          gap="100px"
        >
          <View gridArea="form">
            <Title size="large">{t("benimleiletisimegec")}</Title>
            <View
              alignItems="center"
              justifyContent="center"
              display="flex"
              direction="column"
            >
              <Form onSubmit={sendEmail}>
                <View>
                  <FormElement justifyContent="center" label={t("adsoyad")}>
                    <Input
                      type="text"
                      name="fullname"
                      placeholder={t("adsoyad")}
                    />
                  </FormElement>
                  <FormElement justifyContent="center" label={t("email")}>
                    <Input type="email" name="email" placeholder={t("email")} />
                  </FormElement>
                  <FormElement justifyContent="center" label={t("konu")}>
                    <Input type="text" name="subject" placeholder={t("konu")} />
                  </FormElement>
                  <FormElement justifyContent="center" label={t("mesajiniz")}>
                    <TextArea name="message" label={t("mesajiniz")} />
                  </FormElement>
                </View>
                <View>
                  <Button type="submit">{t("gonder")}</Button>
                </View>
              </Form>
            </View>
          </View>

          <View gridArea="animation">
            <Animation animationdata={codeanimation}></Animation>
          </View>
        </StyledContainer>
      </Container>
    </Section>
  );
};

export default Contact;

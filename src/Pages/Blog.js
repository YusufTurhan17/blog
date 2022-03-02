import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../components/Grid";

import View from "../components/View";
import Title from "../components/Title";
import Container from "../components/Container";
import Section from "../components/section/Section";
import Input from "../components/Input";
import Button from "../components/Button";
import Posts from "../components/Posts";
import Animation from "../components/Animation";
import codeanimation from "../assets/animation/blog.json";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledContainer = styled(Grid)`
  @media (max-width: 600px) {
    gap: 0;
  }
`;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [datacategory, setDataCategory] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Data/Categories.json");
      setDataCategory(response.data);
    };
    fetchData();
  }, []);

  const changeCategory = (key) => {
    setActiveCategory(key);
  };

  const filteredProducts = ({ categories, lang }) => {
    if (
      searchterm &&
      !lang[i18n.language].title
        .toLowerCase()
        .includes(searchterm.toLowerCase())
    )
      return false;

    if (activeCategory && !categories.includes(activeCategory)) {
      return false;
    }

    return true;
  };

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
              <Title size="large">{t("blogarama")}</Title>
              <Input
                placeholder={t("ara")}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                type="search"
              ></Input>
            </View>

            <View>
              <Animation animationdata={codeanimation}></Animation>
            </View>
          </StyledContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <View display="flex" marginBottom="30px">
            {datacategory.map(({ lang, key }) => {
              return (
                <Button key={key} onClick={() => changeCategory(key)}>
                  {lang[i18n.language].title}
                </Button>
              );
            })}
          </View>

          <Grid templateColumns="1fr 1fr 1fr 1fr" gap="50px">
            <Posts dataFilter={filteredProducts} />
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Blog;

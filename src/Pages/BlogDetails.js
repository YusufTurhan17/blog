import Container from "../components/Container";
import styled from "styled-components";

import Section from "../components/section/Section";
import View from "../components/View";
import PostsDetails from "../components/PostsDetails";
import { Link } from "react-router-dom";
import { useThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import { ReactComponent as Arrowleft } from "../assets/icons/arrow-left.svg";

const StyledBlogLink = styled(Link)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-size: 25px;
  color: ${({ theme }) => theme.color};
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

const BlogDetails = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  return (
    <Section>
      <Container>
        <View>
          <StyledBlogLink theme={theme} to="/blog">
            <Arrowleft /> {t("geri")}
          </StyledBlogLink>
        </View>
        <View
          alignItems="center"
          justifyContent="center"
          display="flex"
          direction="column"
        >
          <PostsDetails />
        </View>
      </Container>
    </Section>
  );
};

export default BlogDetails;

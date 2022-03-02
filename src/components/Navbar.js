import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledDiv = styled.div`
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0;
    width: 100%;
    left: 0;
    padding: 25px 0px 25px 0px;
    background: #a5a5a5;
    top: 0;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: ${({ theme }) => theme.color};
  font-weight: 500;

  & + & {
    margin-left: 30px;
  }
  @media (max-width: 600px) {
    & + & {
      margin-left: 0px;
    }
    margin-bottom: 20px;
  }
`;

const Navbar = ({ className }) => {
  const { t } = useTranslation();

  return (
    <StyledDiv className={className}>
      <StyledNav>
        <StyledLink to="/">{t("Anasayfa")}</StyledLink>
        <StyledLink to="/about">{t("Hakkimizda")}</StyledLink>
        <StyledLink to="/blog">{t("Blog")}</StyledLink>
        <StyledLink to="/photos">{t("Fotograflar")}</StyledLink>
        <StyledLink to="/contact">{t("iletisim")}</StyledLink>
      </StyledNav>
    </StyledDiv>
  );
};

export default Navbar;

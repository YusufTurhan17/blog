import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SwitchTheme from "./SwitchTheme";
import Select from "./Select";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const StyledHeader = styled(Container)`
  max-width: 1535px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 26px 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const Styledflex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  @media (max-width: 600px) {
    position: absolute;
    display: none;
    width: 100%;
    left: 0;
    padding: 0px 0px 20px 40px;
    background: #a5a5a5;
    top: 100%;
    z-index: 9999;
  }
`;

const Header = () => {
  let location = useLocation();
  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  const [activemenu, setActiveMenu] = useState(true);
  const { i18n } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <StyledHeader>
      <Logo />

      <StyledDiv>
        <StyledMenu className={`menu ${activemenu ? "active" : ""}`}>
          <Navbar />
          <Styledflex>
            <SwitchTheme />
            <Select
              className="ml-30"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            />
          </Styledflex>
        </StyledMenu>
      </StyledDiv>

      <MobileMenu activemenu={activemenu} setActiveMenu={setActiveMenu} />
    </StyledHeader>
  );
};

export default Header;

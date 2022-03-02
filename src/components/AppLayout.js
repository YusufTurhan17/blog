import View from "./View";
import Header from "./Header";
import Footer from "./Footer";
import Grid from "./Grid";
import styled from "styled-components";

const Wrapper = styled(Grid)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

const AppLayout = ({ children }) => {
  return (
    <Wrapper templateColumns="1fr" height="100%" templateRows="auto 1fr auto">
      <Header />
      <View>{children}</View>

      <Footer />
    </Wrapper>
  );
};

export default AppLayout;

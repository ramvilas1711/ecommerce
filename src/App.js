import logo from "./logo.svg";
import Header from "./Header/Header";
import styled from "styled-components";
import Products from "./Product/Products";
import Contact from "./Contact";
import Footer from "./Footer/Footer";
function App() {
  return (
    <AppSection>
      <Header />
      <Products />
      <Contact />
      <Footer />
    </AppSection>
  );
}

const AppSection = styled.section`
  max-width: 100%;
  min-height: 100vh;
`;

export default App;

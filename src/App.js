
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Feature from "./Components/Feature/Feature";
import Products2 from "./Components/Products/Products2";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Hero />
        <Products />
        <Feature/>
        <Products2 />
        <Footer />
    </Router>
  );
}

export default App;

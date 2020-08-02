import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment className="app-wrapper">
      <Header className="Header" />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;

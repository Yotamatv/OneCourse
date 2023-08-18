import "./style.css";
import React from "react";
import Layout from "./layout/Layout";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Home />
        <Pricing />
      </Layout>
    </React.Fragment>
  );
};

export default App;

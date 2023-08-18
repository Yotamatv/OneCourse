import "./App.css";
import React from "react";
import Layout from "./layout/Layout";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Pricing />
      </Layout>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Body from "./components/body/body";
import MyNavbar from "./components/navbar/navbar";
import Test from "./components/test";

function App() {
  return (
    <>
      {/* Home */}
      <MyNavbar sticky="bottom" />
      {/* <Test /> */}
      <Body />
      <MyNavbar bg="dark" sticky="top" />
    </>
  );
}

export default App;

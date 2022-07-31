import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./themes/App.css";
import { Container } from "./components/index";

const App: React.FC = (): React.ReactElement => {
  return <Container contractAddress="0xC32F206C48E0b79A912a9AA5DF5B5a94075F19e1" />;
};

export default App;

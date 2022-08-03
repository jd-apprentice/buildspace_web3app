import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./themes/App.css";
import { Container } from "./components/index";
import { contractAddress } from "./const";

const App: React.FC = (): React.ReactElement => {
  return <Container contractAddress={contractAddress} />;
};

export default App;

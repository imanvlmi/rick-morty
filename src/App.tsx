import "./App.css";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./routes";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
};

export default App;

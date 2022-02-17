import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShowsContextProvider from "./context/ShowsContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

ReactDom.render(
  <ShowsContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </ShowsContextProvider>,
  document.getElementById("react-container")
);

import regeneratorRuntime from "regenerator-runtime";
import React from "react";
import { render, screen } from "@testing-library/react";
import ShowsContextProvider from "../../context/ShowsContext";
import Home from "../../pages/Home/Home";

test("Header sesrch input should be empty", () => {
  render(
    <ShowsContextProvider>
      <Home />
    </ShowsContextProvider>
  );
  const searchInput = screen.findByPlaceholderText("Search");
  expect(searchInput.value).toBe(undefined);
});

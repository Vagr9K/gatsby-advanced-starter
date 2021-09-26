import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import p404error from "./404";

describe("404 page", () => {
  it("renders without errors", async () => {
    expect.assertions(0);

    render(<p404error />);
  });
});

import React from "react";

import { Home } from "./home";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  test("should match snapshot", () => {
    const page = render(<Home />);

    expect(page).toMatchSnapshot();
  });
});

import React from "react";
import Title from "./title";
import { render } from "@testing-library/react";

describe("Title test", () => {
  test("Should render the title using children props", () => {
    const { getByText } = render(<Title>Hello</Title>);

    expect(getByText("Hello")).toBeInTheDocument();
  });
});

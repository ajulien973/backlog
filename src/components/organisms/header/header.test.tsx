import React from "react";
import Header from "./header";
import { render } from "@testing-library/react";

describe("Header test", () => {
  test("Should render the header using children props", () => {
    const { getByText } = render(
      <Header>
        <h1>Title</h1>
      </Header>
    );

    expect(getByText("Title")).toBeInTheDocument();
  });
});

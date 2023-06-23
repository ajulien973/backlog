import React from "react";
import Footer from "./footer";
import { render, within } from "@testing-library/react";

describe("Footer test", () => {
  test("Should render the footer with current year", () => {
    const { getByRole } = render(<Footer />);

    const link = getByRole("link");
    expect(within(link).getByText("Alexis Julien @ 2023")).toBeInTheDocument();
  });
});

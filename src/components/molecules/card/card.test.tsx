import React from "react";
import Card from "./card";
import { render } from "@testing-library/react";

describe("Card test", () => {
  test("Should render the title and formatted release date", () => {
    const title = "Star Wars";
    const releasedOn = "2022-12-14T00:00:00";
    const id = "c77578d5-2736-4da6-9e8e-269509c5ef61";

    const { getByText, getByRole } = render(
      <Card title={title} releaseDate={releasedOn} subjectId={id} />
    );

    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://img.rgstatic.com/content/movie/c77578d5-2736-4da6-9e8e-269509c5ef61/poster-342.jpg"
    );
    expect(getByText("Star Wars")).toBeInTheDocument();
    expect(getByText("Wed Dec 14 2022")).toBeInTheDocument();
  });
});

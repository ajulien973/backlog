import React from "react";
import Card from "./card";
import { render } from "@testing-library/react";

describe("Card test", () => {
  test("Should render the title and formatted release date", () => {
    const title = "Star Wars";
    const releasedOn = "2022-12-14T00:00:00";
    const id = "c77578d5-2736-4da6-9e8e-269509c5ef61";
    const contentType = "m";

    const { getByText, getByRole } = render(
      <Card
        title={title}
        releaseDate={releasedOn}
        subjectId={id}
        type={contentType}
      />
    );

    expect(getByText("Star Wars")).toBeInTheDocument();
    expect(getByText("Wed Dec 14 2022")).toBeInTheDocument();
  });

  describe("When content is a movie", () => {
    test("Should render the poster with the right url", () => {
      const title = "Star Wars";
      const releasedOn = "2022-12-14T00:00:00";
      const id = "c77578d5-2736-4da6-9e8e-269509c5ef61";
      const contentType = "m";

      const { getByRole } = render(
        <Card
          title={title}
          releaseDate={releasedOn}
          subjectId={id}
          type={contentType}
        />
      );

      expect(getByRole("img")).toHaveAttribute(
        "src",
        "https://img.rgstatic.com/content/movie/c77578d5-2736-4da6-9e8e-269509c5ef61/poster-342.jpg"
      );
    });
  });

  describe("When content is a tv show", () => {
    test("Should render the poster with the right url", () => {
      const title = "Star Wars";
      const releasedOn = "2022-12-14T00:00:00";
      const id = "c77578d5-2736-4da6-9e8e-269509c5ef61";
      const contentType = "s";

      const { getByRole } = render(
        <Card
          title={title}
          releaseDate={releasedOn}
          subjectId={id}
          type={contentType}
        />
      );

      expect(getByRole("img")).toHaveAttribute(
        "src",
        "https://img.rgstatic.com/content/show/c77578d5-2736-4da6-9e8e-269509c5ef61/poster-342.jpg"
      );
    });
  });
});

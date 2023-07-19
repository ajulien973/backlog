import React from "react";
import { render } from "@testing-library/react";

import MediaList from "./media-list";
import { Media } from "hooks/api/types";

describe("MediaList test", () => {
  test("Should render the media list", async () => {
    const mediaList: Media[] = [
      {
        title: "Star Wars",
        released_on: "2022-12-14T00:00:00",
        id: "c77578d5-2736-4da6-9e8e-269509c5ef61",
        content_type: "m",
      },
      {
        title: "Empire Strikes Back",
        released_on: "2023-12-14T00:00:00",
        id: "c77578d5-2736-4da6-9e8e-269509c5ef62",
        content_type: "m",
      },
    ];

    const { getAllByTestId } = await render(
      <MediaList mediaList={mediaList} />
    );

    const renderedList = await getAllByTestId("medialist-card");
    expect(renderedList).toHaveLength(2);
  });
});

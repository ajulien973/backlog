import React from "react";

import { Page } from "./page";
import { render } from "@testing-library/react";

describe("Page Template", () => {
  test("should match snapshot", () => {
    const page = render(
      <Page title={"Title"}>
        <p>Text</p>
      </Page>
    );

    expect(page).toMatchSnapshot();
  });
});

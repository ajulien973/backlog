import React from "react";
import { Server } from "miragejs";

import { Home } from "./home";
import { makeServer } from "mirage/server";
import { renderWithClient } from "tests/utils/createQueryWrapper";

describe("Home Page", () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: process.env.NODE_ENV });
  });

  afterEach(() => {
    server.shutdown();
  });

  test("should match snapshot", async () => {
    const page = await renderWithClient(<Home />);

    expect(page).toMatchSnapshot();
  });
});

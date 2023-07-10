import React from "react";
import { Server } from "miragejs";

import { Home } from "./home";
import { makeServer } from "mirage/server";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: process.env.NODE_ENV });
  });

  afterEach(() => {
    server.shutdown();
  });

  test("should match snapshot", async () => {
    const page = await render(<Home />);

    expect(page).toMatchSnapshot();
  });
});

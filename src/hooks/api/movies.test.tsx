import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { createWrapper } from "tests/utils/createQueryWrapper";
import { useGetMovies } from "./movies";
import { Server, Response } from "miragejs";
import { makeServer } from "mirage/server";
import { movies } from "mirage/models/movie-data";

describe("useGetMovies hook", () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: process.env.NODE_ENV });
  });

  afterEach(() => {
    server.shutdown();
  });

  describe("when the call succeeds", () => {
    test("should be successful", async () => {
      const { result } = renderHook(() => useGetMovies(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
    });

    test("should fetch correct data", async () => {
      const { result } = renderHook(() => useGetMovies(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isFetched).toBe(true));
      expect(result.current.data).toStrictEqual(movies);
    });
  });

  describe("when call fails", () => {
    test("should keep initial data", async () => {
      server.get(
        "https://api.themoviedb.org/3/movie/popular",
        () => new Response(500, {})
      );

      const { result } = renderHook(() => useGetMovies(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isFetched).toBe(true));
      expect(result.current.data).toStrictEqual([]);
    });
  });
});

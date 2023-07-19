import { createServer } from "miragejs";
import { movies } from "mirage/models/movie-data";
import { series } from "mirage/models/serie-data";
import { AppSchema, models } from "mirage/types";

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    models,
    fixtures: {
      movies,
      series,
    },
    routes() {
      this.get(
        "https://api.themoviedb.org/3/movie/popular",
        (schema: AppSchema) => {
          // @ts-ignore
          return schema.movies.all();
        }
      );
      this.get(
        "https://api.themoviedb.org/3/tv/popular",
        (schema: AppSchema) => {
          // @ts-ignore
          return schema.series.all();
        }
      );
    },
  });
}

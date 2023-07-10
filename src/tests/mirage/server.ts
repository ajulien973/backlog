import { createServer, Registry } from "miragejs";
import { movies } from "mirage/models/movie-data";
import { series } from "mirage/models/serie-data";
import { Movie } from "mirage/models/movie";
import { Serie } from "mirage/models/serie";
import Schema from "miragejs/orm/schema";

const models = {
  movie: Movie,
  serie: Serie,
};
const factories = {};

type AppRegistry = Registry<typeof models, typeof factories>;
type AppSchema = Schema<AppRegistry>;

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

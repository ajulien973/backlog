import { createServer, Registry } from "miragejs";
import { movies } from "mirage/models/movie-data";
import { Movie } from "mirage/models/movie";
import Schema from "miragejs/orm/schema";

const models = {
  movie: Movie,
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
    },
    routes() {
      this.get(
        "https://api.themoviedb.org/3/movie/popular",
        (schema: AppSchema) => {
          // @ts-ignore
          return schema.movies.all();
        }
      );
    },
  });
}

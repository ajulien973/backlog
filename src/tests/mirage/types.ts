import { Registry } from "miragejs";

import { Movie } from "mirage/models/movie";
import { Serie } from "mirage/models/serie";
import Schema from "miragejs/orm/schema";

export const models = {
  movie: Movie,
  serie: Serie,
};
export const factories = {};

type AppRegistry = Registry<typeof models, typeof factories>;
export type AppSchema = Schema<AppRegistry>;

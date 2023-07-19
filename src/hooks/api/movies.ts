import { useQuery } from "@tanstack/react-query";
import { Media } from "./types";

enum ServerStateKeysEnum {
  Movies = "movies",
}

export const useGetMovies = () =>
  useQuery({
    queryKey: [ServerStateKeysEnum.Movies],
    queryFn: fetchMovies,
    initialData: [],
  });

async function fetchMovies(): Promise<Media[]> {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular");
  const data = await res.json();
  return data.movies;
}

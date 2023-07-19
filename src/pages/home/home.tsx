import React from "react";

import Page from "components/templates/page";
import MediaList from "components/organisms/media-list";
import { useGetMovies } from "hooks/api/movies";

export const Home = () => {
  const { data: movies } = useGetMovies();

  return (
    <Page title={"Popular movies"}>
      <section>{movies && <MediaList mediaList={movies} />}</section>
    </Page>
  );
};

export default Home;

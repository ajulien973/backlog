import React from "react";

import Page from "components/templates/page";
import MediaList from "components/organisms/media-list";
import movies from "app/movies-list";

export const Home = () => (
  <Page title={"Popular movies"}>
    <section>
      <MediaList mediaList={movies.results} />
    </section>
  </Page>
);

export default Home;

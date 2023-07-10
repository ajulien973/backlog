import React, { useState, useEffect } from "react";

import Page from "components/templates/page";
import MediaList from "components/organisms/media-list";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular`
      );
      const data = await response.json();

      if (data) {
        setMovies(data.movies);
      }
    };
    getData();
  }, []);

  return (
    <Page title={"Popular movies"}>
      <section>
        <MediaList mediaList={movies} />
      </section>
    </Page>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import Page from "components/templates/page";
import MediaList from "components/organisms/media-list";

export const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/tv/popular`);
      const data = await response.json();

      if (data) {
        setSeries(data.series);
      }
    };
    getData();
  }, []);

  return (
    <Page title={"Popular series"}>
      <section>
        <MediaList mediaList={series} />
      </section>
    </Page>
  );
};

export default Series;

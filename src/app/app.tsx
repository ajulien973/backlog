import Page from "components/templates/page";
import MediaList from "components/organisms/media-list";
import movies from "app/movies-list";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Page title={"Popular movies"}>
        <section>
          <MediaList mediaList={movies.results} />
        </section>
      </Page>
    </main>
  );
};

export default App;

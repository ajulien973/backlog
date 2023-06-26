import Header from "components/organisms/header";
import Title from "components/atoms/typography/title";
import MediaList from "components/organisms/media-list";
import Footer from "components/organisms/footer";
import movies from "app/movies-list";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Header>
        <Title>Popular movies</Title>
      </Header>
      <section>
        <MediaList mediaList={movies.results} />
      </section>
      <Footer />
    </main>
  );
};

export default App;

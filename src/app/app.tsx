import Title from "components/atoms/typography/title";
import Card from "components/molecules/card";
import movies from "app/movies-list";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title>Popular movies</Title>
      </header>
      <section className={styles.movies}>
        {movies.results.map((props, index) => (
          <div
            key={index}
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <Card
              title={props.title}
              releaseDate={props.released_on}
              subjectId={props.id}
            />
          </div>
        ))}
      </section>
      <footer className={styles.footer}>
        <a href="https://github.com/ajulien973">
          Alexis Julien @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;

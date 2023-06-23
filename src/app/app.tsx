import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Vital</span> @ Vite
          Template
        </h3>
      </header>
      <footer className={styles.footer}>
        <a href="https://github.com/jvidalv">
          Josep Vidal @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;

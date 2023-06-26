import Home from "pages/home";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
};

export default App;

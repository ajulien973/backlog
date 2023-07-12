import Home from "pages/home";
import Series from "pages/series";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import styles from "./app.module.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="tv" element={<Series />} />
    </>
  )
);
const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;

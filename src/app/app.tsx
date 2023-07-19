import Home from "pages/home";
import Series from "pages/series";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./app.module.css";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  );
};

export default App;

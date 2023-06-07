import Home from "../Pages/Home/Home";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import css from "./App.module.css";
import { Loader } from "./Loader/Loader";
const Tweets = lazy(() => import("../Pages/Tweets/Tweets"));

function App() {

  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="tweets" element={<Tweets />} />

            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

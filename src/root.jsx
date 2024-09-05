import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Professions from "./routes/Professions";
import Mentors from "./routes/Mentors";
import Connection from "./routes/Connection";
import "./root.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="mentors" element={<Mentors />} />
      <Route path="professions" element={<Professions />} />
      <Route path="connection" element={<Connection />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

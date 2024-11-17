import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Layout from "../layouts/Layout";
import Pacientes from "../Pages/Pacientes";
import Visitas from "../Pages/Visitas";
const MainRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/pacientes">
            <Route
              index
              element={<Pacientes />}
            />
          </Route>
          <Route path="/register">
            <Route
              index
              element={<Register />}
            />

            <Route
              path="/register/:dni"
              element={<Visitas />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainRouter;

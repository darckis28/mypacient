import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Layout from "../layouts/Layout";
import Pacientes from "../Pages/Pacientes";

const MainRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes">
            <Route index element={<Pacientes />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainRouter;

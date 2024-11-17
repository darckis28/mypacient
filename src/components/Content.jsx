import { Outlet } from "react-router-dom";
import ContextVisita from "../context/ContextVisita";

const Content = () => {
  return (
    <section className="[grid-area:section] bg-slate-300 overflow-y-scroll">
      <ContextVisita>
        <Outlet />
      </ContextVisita>
    </section>
  );
};
export default Content;

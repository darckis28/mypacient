import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <section className="[grid-area:section] bg-slate-300 overflow-y-scroll">
      <Outlet />
    </section>
  );
};
export default Content;

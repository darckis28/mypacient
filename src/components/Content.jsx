import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <section className="[grid-area:section] bg-slate-300">
      <Outlet />
    </section>
  );
};
export default Content;

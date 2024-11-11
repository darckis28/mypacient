import { FaPen } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import LinkDash from "./LinkDash";
import { FaUsers } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className=" [grid-area:aside] bg-gradientApp">
      <ul className="py-2 pl-4">
        <LinkDash href={"../"} icon={<IoHomeSharp />}>
          Inicio
        </LinkDash>
        <LinkDash href={"../register"} icon={<FaPen />}>
          Registrar
        </LinkDash>
        <LinkDash href={"../pacientes"} icon={<FaUsers />}>
          Pacientes
        </LinkDash>
      </ul>
    </aside>
  );
};
export default Aside;

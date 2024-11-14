import hombre from "/images/hombre.png";
import mujer from "/images/mujer.png";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import Button from "./Button";
import { useContextGlobal } from "../hooks/useContextGlobal";
const ListPacients = ({ client }) => {
  const { nombres, apellidoPaterno, apellidoMaterno, dni, direccion, sexo } =
    client;
  const { dispatchClients } = useContextGlobal();
  const deleteClient = (dni) => {
    dispatchClients({ type: "DELETE", payload: { dni: dni } });
  };
  return (
    <li className="overflow-hidden rounded-md">
      <div
        className={`${
          sexo === "HOMBRE" ? "bg-gradientMan" : "bg-gradientFem"
        }  flex justify-center aspect-square`}
      >
        <img
          src={sexo === "HOMBRE" ? hombre : mujer}
          alt="genero image"
          className="w-10/12 object-cover"
        />
      </div>
      <div className="bg-white p-2">
        <h2 className="font-bold text-sm">
          {nombres} {apellidoPaterno} {apellidoMaterno}
        </h2>
        <p className="font-bold text-sm">
          DNI: <span className="font-normal">{dni} </span>{" "}
        </p>
        <p className="font-bold text-sm">
          Direc: <span className="font-light">{direccion} </span>{" "}
        </p>
        <div className="flex justify-evenly mt-2">
          <Button
            color={"bg-purple-600"}
            hoverColor={"hover:text-purple-600"}
          >
            <FaEdit />
          </Button>
          <Button
            color={"bg-red-500"}
            hoverColor={"hover:text-red-500"}
            onClick={() => deleteClient(dni)}
          >
            <RiDeleteBin6Fill />
          </Button>
          <Button>
            <FaListAlt />
          </Button>
        </div>
      </div>
    </li>
  );
};
export default ListPacients;

import hombre from "/images/hombre.png";
import mujer from "/images/mujer.png";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import Button from "./Button";
import Swal from "sweetalert2";
import { useContextGlobal } from "../hooks/useContextGlobal";
import { useNavigate } from "react-router-dom";
const ListPacients = ({ client }) => {
  const { nombres, apellidoPaterno, apellidoMaterno, dni, direccion, sexo } =
    client;
  const { dispatchClients } = useContextGlobal();
  const navigate = useNavigate();

  const deleteClient = (dni, nombres, apellidoPaterno) => {
    Swal.fire({
      title: `Estas seguro de eliminar a ${nombres} ${apellidoPaterno}`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatchClients({ type: "DELETE", payload: { dni: dni } });
        Swal.fire({
          title: "Paciente Eliminado!",
          text: "Su paciente a sido eliminado con exito",
          icon: "success",
        });
      }
    });
  };

  const linkFrom = () => {
    navigate(`/register/${dni}`);
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
        <h2 className="font-bold text-sm min-h-11">
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
            color={"bg-red-500"}
            hoverColor={"hover:text-red-500"}
            onClick={() => deleteClient(dni, nombres, apellidoPaterno)}
          >
            <RiDeleteBin6Fill />
          </Button>
          <Button onClick={linkFrom}>
            <FaListAlt />
          </Button>
        </div>
      </div>
    </li>
  );
};
export default ListPacients;

import { useContextVistas } from "../hooks/useContextVisitas";
import Button from "./Button";
import Swal from "sweetalert2";
const ListVisitas = ({ data }) => {
  const { dispatchVisita } = useContextVistas();
  const { descripcion, fecha, id } = data;
  function handelClick() {
    Swal.fire({
      title: `Estas seguro de eliminar este registro`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatchVisita({ type: "DELETE", payload: { id } });
      }
    });
  }
  return (
    <li className="flex justify-between mb-3 p-2 bg-neutral-400 shadow-md items-center">
      <p>{descripcion}</p>
      <p>{fecha}</p>
      <Button
        hoverColor={"hover:text-red-500"}
        color={"bg-red-500"}
        onClick={handelClick}
      >
        {" "}
        eliminar
      </Button>
    </li>
  );
};
export default ListVisitas;

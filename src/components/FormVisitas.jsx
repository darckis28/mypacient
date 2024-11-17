import { useState } from "react";
import Button from "./Button";
import InputStyle from "./InputStyle";
import { MdFormatIndentDecrease, MdOutlineDateRange } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useContextVistas } from "../hooks/useContextVisitas";

const FormVisitas = ({ dni, setAdd }) => {
  const { dispatchVisita } = useContextVistas();
  const [form, setForm] = useState({
    descripcion: "",
    fecha: new Date(),
  });
  const handelOnchange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value?.toUpperCase(),
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatchVisita({
      type: "ADD",
      payload: { ...form, id: uuidv4(), userIdClient: dni },
    });
    setForm({ descripcion: "", fecha: new Date() });
    setAdd(false);
    // console.log({ ...form, id: uuidv4(), userIdClient: dni });
  };
  return (
    <form
      className="mt-4"
      onSubmit={handelSubmit}
    >
      <InputStyle
        name={"descripcion"}
        placeholder={"descripcion de visita"}
        icon={<MdFormatIndentDecrease />}
        value={form.descripcion}
        onChange={handelOnchange}
      />
      <InputStyle
        type={"date"}
        name={"fecha"}
        icon={<MdOutlineDateRange />}
        value={form.fecha}
        onChange={handelOnchange}
      />
      <Button>Registrar visita</Button>
    </form>
  );
};
export default FormVisitas;

import Button from "./Button";
import InputStyle from "./InputStyle";
import { FaAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useContextRegister } from "../hooks/useContextRegister";
import { useContextGlobal } from "../hooks/useContextGlobal";
import { FaTransgender } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdNotificationImportant } from "react-icons/md";
import { useState } from "react";

const FromRegister = () => {
  const { dispatchClients, clients } = useContextGlobal();
  const { pacient, setPacient } = useContextRegister();
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  function handelSubmit(e) {
    e.preventDefault();

    if (clients.some((client) => client.dni === pacient.dni)) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
        setPacient({
          nombres: "",
          apellidoMaterno: "",
          apellidoPaterno: "",
          dni: "",
          direccion: "",
        });
      }, 3000);
      return;
    }
    setMessage(false);
    dispatchClients({ type: "ADD", payload: pacient });
    setPacient({
      nombres: "",
      apellidoMaterno: "",
      apellidoPaterno: "",
      dni: "",
      direccion: "",
    });
    navigate(`/register/${pacient.dni}`);
  }

  // funcion que guarda datos de los inputs en el form como objetos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPacient((prevData) => ({
      ...prevData,
      [name]: value.toUpperCase(),
    }));
  };
  return (
    <form
      className="max-w-96 mx-auto mt-10"
      onSubmit={handelSubmit}
    >
      <legend className="mb-4 text-center font-bold text-2xl text-colorSecundary">
        Registrar paciente
      </legend>
      <InputStyle
        icon={<FaRegUser />}
        title={"Nombres"}
        name={"nombres"}
        placeholder={"JORGE PADULA "}
        value={pacient.nombres}
        onChange={handleChange}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"apellidoPaterno"}
        title={"Primer Apellido"}
        placeholder={"QUIZPE"}
        onChange={handleChange}
        value={pacient.apellidoPaterno}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"apellidoMaterno"}
        title={"Segundo Apellido"}
        placeholder={"MAMANI"}
        onChange={handleChange}
        value={pacient.apellidoMaterno}
      />
      <InputStyle
        icon={<FaAddressCard />}
        title={"DNI"}
        name={"dni"}
        placeholder={"75151515 "}
        type={"number"}
        onChange={handleChange}
        value={pacient.dni}
      />
      <InputStyle
        icon={<FaAddressCard />}
        title={"EDAD"}
        name={"edad"}
        placeholder={"25"}
        type={"number"}
        onChange={handleChange}
        value={pacient.edad}
      />
      <InputStyle
        icon={<FaAddressCard />}
        title={"direccion"}
        name={"direccion"}
        placeholder={"AV. LOS LAURELES 455"}
        onChange={handleChange}
        value={pacient.direccion}
      />
      <div className="my-5 relative">
        <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2 text-colorPrimary">
          <FaTransgender />
        </span>
        <select
          name="sexo"
          onChange={handleChange}
          className="w-full  h-9 pl-8 pr-3 text-gray-400 border focus:outline-none rounded shadow-sm focus:border-blue-500 text-sm uppercase"
        >
          <option
            selected
            hidden
            disabled
          >
            Seleccione su Genero
          </option>
          <option value="HOMBRE">Masculino</option>
          <option value="MUJER">Femenino</option>
        </select>
      </div>
      {message && (
        <div className="w-full bg-red-400 font-bold flex gap-2 items-center mb-2">
          <MdNotificationImportant />
          <p className="">Este Paciente ya esta registrado </p>
        </div>
      )}

      <Button>Registrar</Button>
    </form>
  );
};
export default FromRegister;

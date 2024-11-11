import Button from "./Button";
import InputStyle from "./InputStyle";
import { FaAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useContextRegister } from "../hooks/useContextRegister";
import { useContextGlobal } from "../hooks/useContextGlobal";
import { FaTransgender } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FromRegister = () => {
  const { dispatchClients } = useContextGlobal();
  const { pacient, setPacient } = useContextRegister();
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    dispatchClients({ type: "ADD", payload: pacient });
    setPacient({
      nombres: "",
      apellidoMaterno: "",
      apellidoPaterno: "",
      dni: "",
      direccion: "",
    });
    navigate("/pacientes");
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
    <form className="max-w-96 mx-auto mt-10" onSubmit={handelSubmit}>
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
          required
          name="sexo"
          onChange={handleChange}
          className="w-full  h-9 pl-8 pr-3 text-gray-400 border focus:outline-none rounded shadow-sm focus:border-blue-500 text-sm uppercase">
          <option selected hidden disabled>
            Seleccione su Genero
          </option>
          <option value="HOMBRE">Masculino</option>
          <option value="MUJER">Femenino</option>
          <option value="LGTV">38 tipos de gays</option>
        </select>
      </div>

      <Button>Registrar</Button>
    </form>
  );
};
export default FromRegister;

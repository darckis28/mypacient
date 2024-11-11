import { createContext, useState } from "react";

export const contextRegister = createContext(null);
const ContextRegister = ({ children }) => {
  const [pacient, setPacient] = useState({
    nombres: "",
    primerApellido: "",
    segundoApellido: "",
    dni: "",
    direccion: "",
  });
  return (
    <contextRegister.Provider value={{ pacient, setPacient }}>
      {children}
    </contextRegister.Provider>
  );
};
export default ContextRegister;

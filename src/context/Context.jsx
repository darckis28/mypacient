import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      localStorage.setItem(
        "clients",
        JSON.stringify([...state, { ...action.payload }])
      );
      return [...state, { ...action.payload }];
    case "DELETE":
      localStorage.setItem(
        "clients",
        JSON.stringify(state.filter((data) => data.dni !== action.payload.dni))
      );
      return state.filter((data) => data.dni !== action.payload.dni);
  }
};
const ejemplo = [
  {
    apellidoMaterno: "VARGAS",
    apellidoPaterno: "AGUIRRE",
    codVerifica: "9",
    direccion: "Calle Falsa 123",
    dni: "22341585",
    nombres: "ANDI SCOTT",
    edad: 55,
    sexo: "HOMBRE",
  },
  {
    apellidoMaterno: "CASTRO",
    apellidoPaterno: "GONZALEZ",
    codVerifica: "4",
    direccion: "Calle Falsa 123",
    dni: "43885215",
    nombres: "LUIS FERNANDO",
    edad: 33,
    sexo: "MUJER",
  },
  {
    apellidoMaterno: "MARTINEZ",
    apellidoPaterno: "RAMIREZ",
    codVerifica: "1",
    direccion: "Jr. Las Flores 300",
    dni: "46868028",
    nombres: "ANDI SCOTT",
    edad: 58,
    sexo: "HOMBRE",
  },
  {
    apellidoMaterno: "RODRIGUEZ",
    apellidoPaterno: "TORRES",
    codVerifica: "5",
    direccion: "Jr. Las Flores 300",
    dni: "71811694",
    nombres: "ANDI SCOTT",
    edad: 29,
    sexo: "MUJER",
  },
  {
    apellidoMaterno: "LEON",
    apellidoPaterno: "GONZALEZ",
    codVerifica: "5",
    direccion: "Av. La Paz 505",
    dni: "59030375",
    nombres: "MARIA JOSE",
    edad: 35,
    sexo: "MUJER",
  },
  {
    apellidoMaterno: "LEON",
    apellidoPaterno: "PEREZ",
    codVerifica: "2",
    direccion: "Calle Los Alamos 150",
    dni: "45615817",
    nombres: "ANDI SCOTT",
    edad: 52,
    sexo: "HOMBRE",
  },
  {
    apellidoMaterno: "RODRIGUEZ",
    apellidoPaterno: "PEREZ",
    codVerifica: "4",
    direccion: "Calle Los Alamos 150",
    dni: "14278803",
    nombres: "MARIA JOSE",
    edad: 41,
    sexo: "HOMBRE",
  },
  {
    apellidoMaterno: "RODRIGUEZ",
    apellidoPaterno: "TORRES",
    codVerifica: "3",
    direccion: "Calle Falsa 123",
    dni: "51611392",
    nombres: "LUIS FERNANDO",
    edad: 29,
    sexo: "MUJER",
  },
  {
    apellidoMaterno: "LEON",
    apellidoPaterno: "GONZALEZ",
    codVerifica: "5",
    direccion: "Av. La Paz 505",
    dni: "59052166",
    nombres: "JUAN CARLOS",
    edad: 38,
    sexo: "MUJER",
  },
  {
    apellidoMaterno: "LEON",
    apellidoPaterno: "AGUIRRE",
    codVerifica: "7",
    direccion: "Calle Falsa 123",
    dni: "32489228",
    nombres: "MARIA JOSE",
    edad: 42,
    sexo: "MUJER",
  },
];

export const ContextPacients = createContext("");
const Context = ({ children }) => {
  const [clients, dispatchClients] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("clients")) || []
  );
  return (
    <ContextPacients.Provider value={{ clients, dispatchClients }}>
      {children}
    </ContextPacients.Provider>
  );
};
export default Context;

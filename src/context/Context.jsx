import { Children, createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload }];
  }
};

export const ContextPacients = createContext("");
const Context = ({ children }) => {
  const [clients, dispatchClients] = useReducer(reducer, [
    {
      apellidoMaterno: "LEON",
      apellidoPaterno: "AGUIRRE",
      codVerifica: "4",
      direccion: "sadsadsadsad",
      dni: "74753238",
      nombres: "ANDI SCOTT",
      success: true,
    },
  ]);
  return (
    <ContextPacients.Provider value={{ clients, dispatchClients }}>
      {children}
    </ContextPacients.Provider>
  );
};
export default Context;

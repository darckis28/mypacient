import { createContext, useReducer } from "react";

export const contextVisit = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      localStorage.setItem(
        "visita",
        JSON.stringify([...state, { ...action.payload }])
      );
      return [...state, { ...action.payload }];
    case "DELETE":
      localStorage.setItem(
        "visita",
        JSON.stringify(state.filter((data) => data.id !== action.payload.id))
      );
      return state.filter((data) => data.id !== action.payload.id);
  }
};

const ContextVisita = ({ children }) => {
  const [visita, dispatchVisita] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("visita")) || []
  );
  return (
    <contextVisit.Provider value={{ visita, dispatchVisita }}>
      {children}
    </contextVisit.Provider>
  );
};
export default ContextVisita;

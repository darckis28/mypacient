import { useContext } from "react";
import { contextRegister } from "../context/ContextRegister";

export const useContextRegister = () => useContext(contextRegister);
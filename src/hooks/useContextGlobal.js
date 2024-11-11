import { useContext } from "react";
import { ContextPacients } from "../context/Context";

export const useContextGlobal = () => useContext(ContextPacients);
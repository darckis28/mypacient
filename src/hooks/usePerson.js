import { useState } from "react";
import getDatos from "../services/person";
import { useContextRegister } from "./useContextRegister";
const usePerson = ({ dni }) => {
    const [error, setError] = useState("");
    const { setPacient } = useContextRegister()

    const getPerson = async (e) => {
        e.preventDefault();
        try {
            if (dni.length == 8) {
                const person = await getDatos(dni)
                setPacient({
                    dni: person.dni,
                    apellidoMaterno: person.apellidoMaterno,
                    apellidoPaterno: person.apellidoPaterno,
                    nombres: person.nombres,
                    direccion: '',
                })
                setError('');
                return
            }
            setError("El DNI no es valido");

        } catch (error) {
            setError(error.message)
        }
    }

    return {
        error,
        getPerson
    }
};
export default usePerson;
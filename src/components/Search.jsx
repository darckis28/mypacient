import { useState } from "react";
import usePerson from "../hooks/usePerson";
const Search = () => {
  const [dni, setDni] = useState("");
  const { error, getPerson } = usePerson({ dni });
  return (
    <form action="" onSubmit={getPerson} className="flex gap-2">
      <input
        type="number"
        onChange={(e) => setDni(e.target.value)}
        value={dni}
        placeholder="Inserte DNI"
        className="pl-4 text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
      />
      <button className="bg-colorPrimary py-2 px-4 rounded-md text-white">
        Buscar
      </button>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
};
export default Search;

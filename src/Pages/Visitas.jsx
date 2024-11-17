import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useContextVistas } from "../hooks/useContextVisitas";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import FormVisitas from "../components/FormVisitas";
import { useParams } from "react-router-dom";
import ListVisitas from "../components/ListVisitas";

const Visitas = () => {
  const { visita } = useContextVistas();
  const { dni } = useParams();
  const [add, setAdd] = useState(false);
  const [registro, setRegistro] = useState([]);
  useEffect(() => {
    setRegistro(visita.filter((data) => data.userIdClient == dni).reverse());
  }, [dni, visita]);

  function openAddVisita() {
    setAdd(!add);
  }
  return (
    <section className="p-4">
      <header>
        <h1 className="text-center text-5xl font-bold text-colorSecundary mb-4">
          Visitas
        </h1>

        <div className=" bg-white flex justify-between p-2 items-center">
          <h2 className="font-bold tracking-wider text-blue-700">
            Registrar nueva visita
          </h2>
          <Button onClick={openAddVisita}>
            {add ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>
        {add && (
          <FormVisitas
            dni={dni}
            setAdd={setAdd}
          />
        )}
      </header>
      <section className="my-8">
        {registro.length < 1 ? (
          <h3>No tienes visitas registradas aún</h3>
        ) : (
          <ul>
            {registro.map((data) => (
              <ListVisitas
                key={data.id}
                data={data}
              />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default Visitas;

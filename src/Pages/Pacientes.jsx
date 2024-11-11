import ListPacients from "../components/ListPacients";
import { useContextGlobal } from "../hooks/useContextGlobal";

const Pacientes = () => {
  const { clients } = useContextGlobal();
  return (
    <div className="overflow-auto h-screen w-full p-8  ">
      <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {clients ? (
          clients.map((client) => (
            <ListPacients key={client.dni} client={client} />
          ))
        ) : (
          <div>No tienes pacientes </div>
        )}
      </ul>
    </div>
  );
};
export default Pacientes;

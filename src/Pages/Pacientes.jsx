import ListPacients from "../components/ListPacients";
import { useContextGlobal } from "../hooks/useContextGlobal";

const Pacientes = () => {
  const { clients } = useContextGlobal();

  return (
    <div className="overflow-auto h-screen w-full p-8  ">
      <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {clients.length === 0 ? (
          <div>No tienes pacientes </div>
        ) : (
          clients.map((client) => (
            <ListPacients
              key={client.dni}
              client={client}
            />
          ))
        )}
      </ul>
    </div>
  );
};
export default Pacientes;

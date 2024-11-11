import { useContextGlobal } from "../hooks/useContextGlobal";

const Pacientes = () => {
  const { clients } = useContextGlobal();
  return (
    <div>
      {clients.length > 0 ? (
        <ul>
          {clients.map((client) => (
            <li key={client.dni}>{client.nombres} </li>
          ))}
        </ul>
      ) : (
        <p>no hay pacientes</p>
      )}
    </div>
  );
};
export default Pacientes;

import doctor from "/images/doctor.avif";
const Home = () => {
  return (
    <div className="p-5 mx-auto">
      <h2 className="text-colorSecundary font-bold text-center text-5xl mb-4">
        bienvenido
      </h2>
      <p className="text-justify mb-4">
        <span className="font-bold"> Mi Paciente</span> es una aplicación
        diseñada para ayudar a los médicos y profesionales de la salud a
        gestionar de manera fácil y rápida la información de sus pacientes.
        Permite registrar los datos personales de cada paciente, su historial
        médico y las visitas médicas realizadas. Además, tiene una función de
        búsqueda rápida usando el DNI del paciente, lo que facilita acceder a su
        información en segundos.
      </p>
      <img
        src={doctor}
        alt="doctor ayudando"
      />
    </div>
  );
};
export default Home;

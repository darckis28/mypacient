import { GiDoctorFace } from "react-icons/gi";
const Header = () => {
  return (
    <header className="[grid-area:header] bg-colorPrimary p-2 md:p-4 shadow flex gap-2 items-center">
      <span className="text-white text-2xl">
        <GiDoctorFace />
      </span>
      <h1 className=" hidden md:block text-2xl uppercase font-bold text-white">
        Mi Paciente
      </h1>
    </header>
  );
};
export default Header;

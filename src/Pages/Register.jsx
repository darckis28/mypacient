import Search from "../components/Search";
import FromRegister from "../components/FromRegister";
import ContextRegister from "../context/ContextRegister";

const Register = () => {
  return (
    <div className="p-3 md:p-8 ">
      <ContextRegister>
        <Search />
        <FromRegister />
      </ContextRegister>
    </div>
  );
};
export default Register;

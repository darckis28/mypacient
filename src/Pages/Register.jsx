import Search from "../components/Search";
import FromRegister from "../components/FromRegister";
import ContextRegister from "../context/ContextRegister";

const Register = () => {
  return (
    <div className="p-8 overflow-y-scroll">
      <ContextRegister>
        <Search />
        <FromRegister />
      </ContextRegister>
    </div>
  );
};
export default Register;

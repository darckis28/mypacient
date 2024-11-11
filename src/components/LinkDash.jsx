import { Link } from "react-router-dom";
const LinkDash = ({ icon, href, children }) => {
  return (
    <li>
      <Link
        to={href}
        className="w-full p-2 hover:scale-95 hover:bg-colorPrimary transition-all  uppercase rounded-l-full flex gap-2 items-center text-white font-semibold ">
        <span>{icon}</span>
        <p className="hidden md:block">{children} </p>
      </Link>
    </li>
  );
};
export default LinkDash;

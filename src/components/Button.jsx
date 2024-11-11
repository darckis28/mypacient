const Button = ({ children, color, hoverColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2  text-center text-white
         ${color ? color : "bg-colorPrimary"} 
         border border-colorbg-colorPrimary rounded  hover:bg-transparent 
      ${hoverColor ? hoverColor : " hover:text-colorPrimary"} 
      border border-colorbg-colorPrimary rofocus:outline-none focus:ring`}
      href="/download">
      {children}
    </button>
  );
};
export default Button;

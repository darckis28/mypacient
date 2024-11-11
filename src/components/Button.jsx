const Button = ({ children }) => {
  return (
    <button
      className="px-6 py-2 min-w-[120px] text-center text-white bg-colorPrimary border border-colorbg-colorPrimary rounded  hover:bg-transparent hover:text-colorPrimary focus:outline-none focus:ring"
      href="/download">
      {children}
    </button>
  );
};
export default Button;

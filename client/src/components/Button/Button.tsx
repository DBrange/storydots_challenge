function Button({
  children,
  handleClick,
}: {
  children: string;
  handleClick?: any;
}) {
  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-pink-500 hover:bg-pink-300 text-white px-5 py-2"
    >
      {children}
    </button>
  );
}
export default Button
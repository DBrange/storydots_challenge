function ProductsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <div className="p-3 pt-10 w-full text-center">{children}</div>;
}

export default ProductsContainer;

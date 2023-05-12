function DetailContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <div className="p-3 mt-10 text-center">{ children }</div>;
}
export default DetailContainer
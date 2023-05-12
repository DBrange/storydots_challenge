import { Brand, EventSelect } from "../../models";


interface Props {
  name: string;
  brands?: Brand[]
  id: string;
  handler: (e: EventSelect) => void;
  label: string;
  error?: string;
  touched: boolean;
}

function SelectForm({
  name,
  brands,
  id,
  handler,
  label,
  error,
  touched,
}: Props) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block">
       {label}
      </label>
      <select
        className="h-10 border rounded-md text-center w-[90%] mt-3 shadow-md"
        name={name}
        onChange={handler}
        defaultValue="default"
        id={id}
      >
        <option value="default" hidden>
          Selecciona
        </option>
        {brands?.map((brand: Brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.brand}
          </option>
        ))}
      </select>
      <p
        className={`${
          error && touched? "text-red-400" : "text-transparent"
        } text-xs`}
      >
        {error || "Hay un error"}
      </p>
    </div>
  );
}

export default SelectForm;

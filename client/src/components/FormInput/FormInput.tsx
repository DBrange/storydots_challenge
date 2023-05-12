import { EventInput } from "../../models";
import { useLoginContext } from "../../pages/Login/context";


interface Props {
  type: string;
  name: string;
  id: string;
  value: string | number;
  handler: (e: EventInput) => void;
  error: string;
  placeholder: string;
  label: string;
  touched: boolean;
}

function FormInput({
  type,
  name,
  id,
  placeholder,
  label,
  value,
  handler,
  error,
  touched,
}: Props) {
  return (
    <div>
      <div>
        <label className="block" htmlFor={id}>
          {label}
        </label>
        <input
          className="text-center border w-[90%] h-10 shadow-md overflow-hidden"
          type={type}
          name={name}
          value={value}
          onChange={handler}
          id={id}
          placeholder={placeholder}
        />
      </div>
      <p
        className={`${error && touched ? "text-red-300" : "text-transparent"}`}
      >
        {error || "a"}
      </p>
    </div>
  );
}

export default FormInput;

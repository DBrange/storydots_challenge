import { useLoginContext } from "../../context";
import { FormInput } from "../../../../components/FormInput";

function FormBox() {
  const {
    formValues,
    handleFormValues,
    handleFormSubmit,
    errors,
    touched,
    textError,
  } = useLoginContext();

  return (
    <form onSubmit={handleFormSubmit}>
      <FormInput
        type="text"
        name="username"
        id="username"
        value={formValues.username}
        handler={handleFormValues}
        error={errors.username}
        touched={touched.username}
        placeholder="username o email"
        label="Nombre de usuario o Email"
      />

      <FormInput
        type="password"
        name="password"
        id="password"
        value={formValues.password}
        handler={handleFormValues}
        error={errors.password}
        touched={touched.password}
        placeholder="contraseña"
        label="contraseña"
      />

      <div className="block">
        <button
          className="rounded-md bg-pink-500 hover:bg-pink-300 text-white px-5 py-2"
          type="submit"
        >
          Ingresar
        </button>
      </div>

      <div className={`${textError ? 'inline-block' : 'hidden'} rounded-md w-full mt-5 p-3 text-red-500 bg-red-300`}>Valores incorrectos</div>
    </form>
  );
}

export default FormBox;

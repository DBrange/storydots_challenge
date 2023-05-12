import { FormInput, SelectForm } from "../../../../../components";
import { useFormContext } from "../../context";

function FormBox() {
  const {
    formValues,
    errors,
    touched,
    handleFormSubmit,
    handleFormValues,
    handleValuesFormSlect,
    data,
    brands,
    textError,
  } = useFormContext();
  return (
    <form onSubmit={handleFormSubmit} className="text-center">
      <SelectForm
        name="brand"
        brands={brands}
        id="brand"
        handler={handleValuesFormSlect}
        label="Marca del producto"
        error={errors?.brand}
        touched={touched.brand}
      />
      <FormInput
        type="text"
        name="name"
        id="name"
        value={formValues.name}
        handler={handleFormValues}
        error={errors.name}
        touched={touched.name}
        placeholder="Nombre del producto"
        label="Nombre"
      />
      <FormInput
        type="text"
        name="description"
        id="description"
        value={formValues.description}
        handler={handleFormValues}
        error={errors.description}
        touched={touched.description}
        placeholder="Descripcion del producto"
        label="Descripcion"
      />
      <FormInput
        type="text"
        name="image"
        id="image"
        value={formValues.image}
        handler={handleFormValues}
        error={errors.image}
        touched={touched.image}
        placeholder="Imagen del producto"
        label="Imagen"
      />
      <FormInput
        type="text"
        name="price"
        id="price"
        value={formValues.price}
        handler={handleFormValues}
        error={errors.price}
        touched={touched.price}
        placeholder="Precio del producto"
        label="Precio"
      />

      <button
        className="rounded-md bg-pink-500 hover:bg-pink-300 text-white px-5 py-2"
        type="submit"
      >
        Agregar
      </button>
      <div
        className={`${
          textError ? "inline-block" : "hidden"
        } rounded-md w-[90%] mt-5 p-3 text-red-500 bg-red-300`}
      >
        Valores incorrectos
      </div>
    </form>
  );
}
export default FormBox;

import { FormValues, FormValuesErrorForm, FormValuesForm } from "../../../../models";

export const validate = (values: FormValuesForm) => {
  const errors: FormValuesErrorForm = {
    name: "",
    description: "",
    image: "",
    price: "",
    brand: ''
  };

  if (!values.name.length)
    errors.name = "Este campo no contiene ningun caracter";
  if (!values.description.length)
    errors.description = "Este campo no contiene ningun caracter";
  if (!values.image.length)
    errors.image = "Este campo no contiene ningun caracter";
  if (!values.price) errors.price = "Este campo no contiene ningun caracter";
  if (values.price < 0) errors.price = "No es un precio valido";
  if (isNaN(values.price)) errors.price = "Solo numeros";
  if (!values.brand.length)
    errors.brand = "No ha seleccionado ninguna opcion";
  
  return errors
}
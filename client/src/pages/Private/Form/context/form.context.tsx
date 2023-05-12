import { createContext, useContext, useState } from "react";
import useSWRMutation from "swr/mutation";
import { EventForm, EventInput, EventSelect, FormTouched, FormTouchedForm, FormValues, FormValuesErrorForm, FormValuesForm, PublicRoutes } from "../../../../models";
import { useNavigate } from "react-router-dom";
import { validate } from "../utilities";
import { BrandsUrl, CreateProductUrl, addProduct, getBrands } from "../services";
import useSWR from 'swr'
import { Brand } from '../../../../models/interfaces/products.interface';

interface IFormContext {
  formValues: FormValuesForm;
  handleFormValues: (e: EventInput) => void;
  handleFormSubmit: (e: EventForm) => void;
  handleValuesFormSlect: (e: EventSelect) => void;
  errors: FormValuesErrorForm;
  touched: FormTouchedForm;
  data?: Response;
  brands?: Brand[];
  textError: boolean
}

export const FormContext = createContext<IFormContext | undefined>(undefined);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const FormProvider = ({ children }: ChildrenType) => {

  const [textError, setTextError] = useState(false);

  const [formValues, setFormValues] = useState<FormValuesForm>({
    name: "",
    description: "",
    image: "",
    price: 0,
    brand: ''
  });

  const [errors, serErrors] = useState<FormValuesErrorForm>({
    name: "a",
    description: "a",
    image: "a",
    price: 'a',
    brand: ''
  });

  const [touched, setTouched] = useState<FormTouchedForm>({
    name: false,
    description: false,
    image: false,
    price: false,
    brand: false
  });

  const handleFormValues = (e: EventInput) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value.trim(),
    });

    serErrors(
      validate({
        ...formValues,
        [name]: value.trim(),
      })
    );

    setTouched({
      ...touched,
      [name]: true,
    });
  };

    const handleValuesFormSlect = (e: EventSelect) => {
      const { value, name } = e.target;

      setFormValues({
        ...formValues,
        brand: value,
      });
    };

  const { data: brands } = useSWR(BrandsUrl, getBrands);

  const { trigger, data, reset } = useSWRMutation(CreateProductUrl, addProduct);
  const navigate = useNavigate();

  const handleFormSubmit = (e: EventForm) => {
    e.preventDefault();

    const allErrors = Object.values(errors);
    if (allErrors.every((el) => el === "")) {
      trigger(formValues);
      reset()
      setFormValues({ name: "", description: "", image: "", price: 0, brand: '' });
      serErrors({ name: "", description: "", image: "", price: '', brand: ''});
      navigate(`/${PublicRoutes.PRODUCTS}`);
    } else {
      setTextError(true)
    }
  };

  const values = {
    formValues,
    handleFormValues,
    handleFormSubmit,
    handleValuesFormSlect,
    errors,
    touched,
    data,
    brands,
    textError,
  };

  return (
    <FormContext.Provider value={values}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error(
      "useLoginContext solo puedo ser usado dentro de LoginProvider"
    );

  return context;
};

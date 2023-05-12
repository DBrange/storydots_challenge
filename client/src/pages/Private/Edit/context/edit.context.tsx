import { createContext, useContext, useState } from "react";
import useSWRMutation from "swr/mutation";
import {
  Brand,
  EventForm,
  EventInput,
  EventSelect,
  FormTouchedForm,
  FormValuesErrorForm,
  FormValuesForm,
  PublicRoutes,
} from "../../../../models";
import { useNavigate, useParams } from "react-router-dom";
import { validate } from "../utilities";
import { BaseUrl, UpdateProductUrl, getProduct, updateProduct } from "../services/edit.service";
import useSWR from "swr";
import { BrandsUrl, getBrands } from "../../Form";

interface IFormContext {
  formValues: FormValuesForm;
  handleFormValues: (e: EventInput) => void;
  handleFormSubmit: (e: EventForm) => void;
  handleValuesFormSlect: (e: EventSelect) => void;
  errors: FormValuesErrorForm;
  touched: FormTouchedForm;
  data?: Response;
  textError: boolean;
  brands?:Brand[]
}

export const EditContext = createContext<IFormContext | undefined>(undefined);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const EditProvider = ({ children }: ChildrenType) => {
  const { id } = useParams();
  
  const { data: product } = useSWR(`${BaseUrl}${id}`, getProduct);

  const [textError, setTextError] = useState(false);

  const [formValues, setFormValues] = useState<FormValuesForm>({
    name: product?.name!,
    description: product?.description!,
    image: product?.image!,
    price: product?.price!,
    brand: product?.brand?.brand ?? ''
  });

  const [errors, serErrors] = useState<FormValuesErrorForm>({
    name: "",
    description: "",
    image: "",
    price: "",
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

  const { trigger, data, reset } = useSWRMutation(
    `${UpdateProductUrl}/${id}`,
    updateProduct
  );
  const navigate = useNavigate();

  const handleFormSubmit = (e: EventForm) => {
    e.preventDefault();

    const allErrors = Object.values(errors);
    if (allErrors.every((el) => el === "")) {
      trigger(formValues);
      navigate(`/${PublicRoutes.PRODUCTS}`);
      reset();
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
    textError,
    brands,
  };

  return <EditContext.Provider value={values}>{children}</EditContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(EditContext);
  if (!context)
    throw new Error(
      "useLoginContext solo puedo ser usado dentro de LoginProvider"
    );

  return context;
};

import { createContext, useContext, useState, useEffect, useRef } from "react";
import useSWRMutation from "swr/mutation";
import { EventForm, EventInput, FormTouched, FormValues } from "../../../models";
import { validate } from "../utilities";
import { LoginUrl, loginUser } from "../services";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models";
import { addUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

interface ILoginContext {
  formValues: FormValues;
  handleFormValues: (e: EventInput) => void;
  handleFormSubmit: (e: EventForm) => void;
  errors: FormValues;
  touched: FormTouched;
  data?: Response;
  error?: Response;
  textError: boolean
}

export const LoginContext = createContext<ILoginContext | undefined>(undefined);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const LoginProvider = ({ children }: ChildrenType) => {
  const emptyValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(emptyValues);

  const [errors, serErrors] = useState<FormValues>({
    username: "a",
    password: "a",
  });

  const [textError, setTextError] = useState(false)

  const [touched, setTouched] = useState<FormTouched>({
    username: false,
    password: false,
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
  

  const { trigger, data, error } = useSWRMutation(LoginUrl, loginUser);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleFormSubmit = (e: EventForm) => {
    e.preventDefault();

    const allErrors = Object.values(errors);
    if (allErrors.every((el) => el === "")) {
      trigger(formValues);
        setFormValues(emptyValues);
        serErrors(emptyValues);
        navigate(`/${PublicRoutes.PRODUCTS}`);
        setTimeout(() => {
          
          dispatch(addUser());
        }, 300);
    } else {
      setTextError(true)
    }
  };

  const values = {
    formValues,
    handleFormValues,
    handleFormSubmit,
    errors,
    touched,
    data,
    error,
    textError,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context)
    throw new Error(
      "useLoginContext solo puedo ser usado dentro de LoginProvider"
    );

  return context;
};

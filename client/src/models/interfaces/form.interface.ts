export interface InitialState {
  formValues: FormValues;
  formErrors: FormValues;
  formTouched: FormTouched;
}

export interface FormValues {
  username: string;
  password: string;
}

export interface FormTouched {
  username: boolean;
  password: boolean;
}

export interface FormValuesForm {
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string
}

export interface FormValuesUpdate {
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  brand?: string
}
export interface FormValuesErrorForm {
  name: string;
  description: string;
  image: string;
  price: string;
  brand: string
}

export interface FormTouchedForm {
  name: boolean;
  description: boolean;
  image: boolean;
  price: boolean;
  brand: boolean
}
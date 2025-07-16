import { useContext } from 'react';
import { FormContext } from '../context/formContext';

export const useFormProvider = () => useContext(FormContext);

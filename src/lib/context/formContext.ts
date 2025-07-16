import { createContext } from 'react';
import type { FormState } from '../types/FormState';

export const FormContext = createContext<FormState>({
  values: {},
});

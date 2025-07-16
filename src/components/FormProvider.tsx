'use client';

import { FormContext } from '@/lib/context/formContext';

const FormProvider = () => {
  return <FormContext.Provider value={{ values: {} }}></FormContext.Provider>;
};

export default FormProvider;

import { useContext } from 'react';
import { RFormContext } from '../context/rformContext';

export const useRFormProvider = () => useContext(RFormContext);

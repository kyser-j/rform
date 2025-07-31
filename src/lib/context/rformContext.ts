import { createContext } from 'react';
import { MultiDiGraph } from '../form/MultiDiGraph';
import { RFormValues } from '../form/RFormValues';
import type { RFormState } from '../types/RFormState';

export const RFormContext = createContext<RFormState>({
  pageGraph: new MultiDiGraph(),
  values: new RFormValues(),
});

import { createContext } from 'react';
import { MultiDiGraph } from '../form/MultiDiGraph';
import type { RFormState } from '../types/RFormState';

export const RFormContext = createContext<RFormState>({
  pageGraph: new MultiDiGraph(),
});

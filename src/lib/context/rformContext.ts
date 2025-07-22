import { createContext } from 'react';
import { MultiDigraph } from '../form/MultiDigraph';
import type { RFormState } from '../types/RFormState';

export const RFormContext = createContext<RFormState>({
  pageGraph: new MultiDigraph(),
});

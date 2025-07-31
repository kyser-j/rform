import type { MultiDiGraph } from '../form/MultiDiGraph';
import type { RFormValues } from '../form/RFormValues';
import type { InteractionRule } from './Rules';

export interface RFormState {
  pageGraph: MultiDiGraph;
  rules?: InteractionRule[];
  values: RFormValues;
}

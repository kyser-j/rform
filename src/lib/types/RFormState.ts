import type { MultiDiGraph } from '../form/MultiDiGraph';
import type { InteractionRule } from './InteractionRules';

export interface RFormState {
  pageGraph: MultiDiGraph;
  rules?: InteractionRule[];
}

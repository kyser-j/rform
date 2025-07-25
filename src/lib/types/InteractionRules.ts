import type { FormComponentType } from './FormComponents';

export interface InteractionRule {
  trigger: TriggerCondition;
  effect: TriggerEffect;
}

export interface TriggerCondition {
  type: TriggerType;
  targetRFormId?: string;
  targetComponentType?: FormComponentType;
}

export interface TriggerEffect {
  type: ActionType;
  targetRFormId?: string;
}

type ActionType = 'navigate' | 'show' | 'hide';
type TriggerType = 'equals' | 'click' | 'change';

import type { FormComponentType } from './FormComponents';

/*
 * UI Interaction Rules
 */
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

/*
 * Edge Navigation Rules
 * This is a tree where each node can have multiple sub-nodes
 */
export type EdgeNavigationRule = EdgeNavigationGroup | EdgeNavigationCondition;

export interface EdgeNavigationGroup {
  rFormId: string;
  type: 'logical';
  operator: 'and' | 'or';
  conditions: EdgeNavigationRule[];
}

export type NavigationConditionOperator = 'equals' | 'not-equals' | 'greater-than' | 'less-than' | 'greater-or-equal' | 'less-or-equal';

export interface EdgeNavigationCondition {
  rFormId: string;
  type: 'condition';
  operator: NavigationConditionOperator;
  targetValueRFormId: string;
  configuredValue: string | boolean;
}

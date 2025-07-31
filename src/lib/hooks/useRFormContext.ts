import { useContext } from 'react';
import { RFormContext } from '../context/rformContext';
import type { FormComponent } from '../types/FormComponents';
import type { RFormState } from '../types/RFormState';

export const useRFormContext = (component?: FormComponent): RFormState => {
  const context = useContext(RFormContext);

  // If no component passed in we can't filter on the rules to find which ones are applicable to this component
  // so we'll return no interaction rules in that case
  if (!component) return { pageGraph: context.pageGraph, values: context.values };

  const applicableInteractionRules = context.rules?.filter(
    (rule) =>
      (rule.trigger.targetRFormId && rule.trigger.targetRFormId === component.rFormId) ||
      (rule.trigger.targetComponentType && rule.trigger.targetComponentType === component.formComponentType),
  );

  return { pageGraph: context.pageGraph, rules: applicableInteractionRules, values: context.values };
};

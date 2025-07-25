import type { InteractionRule } from '../types/InteractionRules';

export const nextPageClickInteractionRule: InteractionRule = {
  trigger: {
    type: 'click',
    targetComponentType: 'nextbutton',
  },
  effect: {
    type: 'navigate',
  },
};

export const previousPageClickInteractionRule: InteractionRule = {
  trigger: {
    type: 'click',
    targetComponentType: 'previousbutton',
  },
  effect: {
    type: 'navigate',
  },
};

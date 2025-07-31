import type { InteractionRule } from '../types/Rules';

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

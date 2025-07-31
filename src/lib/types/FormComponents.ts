import type { EdgeNavigationRule, InteractionRule } from './Rules';

type Discriminator = 'form' | 'page' | 'pageedge' | 'section' | 'component';

export interface FormEntity {
  rFormId: string;
  htmlId: string;
  name: string;
  discriminator: Discriminator;
}

export interface FormEntityWithSubEntities extends FormEntity {
  entities: Entities;
}

export interface RForm extends FormEntity {
  discriminator: 'form';
  pages: Page[];
  rules?: InteractionRule[];
}

export interface PageEdge extends Omit<FormEntity, 'htmlId'> {
  discriminator: 'pageedge';
  destinationPageRFormId: string;
  edgeNavigationRule?: EdgeNavigationRule;
}

export interface Page extends FormEntityWithSubEntities {
  discriminator: 'page';
  edges: PageEdge[];
}

export interface Section extends Omit<FormEntityWithSubEntities, 'name'> {
  discriminator: 'section';
  layout: '1-column' | '2-column' | '3-column';
}

// This will be the base for the input/text components like
// export interface Input extends HTMLInputElement, FormComponent
export interface FormComponent extends FormEntity {
  discriminator: 'component';
  formComponentType: FormComponentType;
  hasTrackableInputValue: boolean;
}

export type FormComponentType = 'button' | 'nextbutton' | 'previousbutton' | 'checkbox' | 'dropdown' | 'input' | 'radio' | 'text' | 'textarea';

export type Entities = Array<Section | FormComponent>;

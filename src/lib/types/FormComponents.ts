type Discriminator = 'form' | 'page' | 'pageedge' | 'section' | 'component';

export interface FormEntity {
  id: string;
  name: string;
  discriminator: Discriminator;
}

export interface FormEntityWithSubEntities extends FormEntity {
  entities: Entities;
}

export interface RForm extends FormEntity {
  discriminator: 'form';
  pages: Page[];
}

export interface PageEdge extends FormEntity {
  discriminator: 'pageedge';
  destinationPageId: string;
}

export interface Page extends FormEntityWithSubEntities {
  discriminator: 'page';
  edges: PageEdge[];
}

export interface Section extends Omit<FormEntityWithSubEntities, 'name'> {
  discriminator: 'section';
  layout: '1-column' | '2-column' | '3-column';
}

// This will be the base for the input components like
// export interface Input extends HTMLInputElement, FormComponent
//
// Unsure if I'll use this for things like labels, paragraphs, links, etc.
export interface FormComponent extends FormEntity {
  discriminator: 'component';
  formComponentType: FormComponentType;
}

export type FormComponentType = 'button' | 'nextbutton' | 'checkbox' | 'dropdown' | 'input' | 'radio' | 'text' | 'textarea';

export type Entities = Array<Section | FormComponent>;

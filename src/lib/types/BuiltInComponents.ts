import type { FormComponent, FormEntityWithSubEntities } from './FormComponents';

type FormComponentWithEntities = FormComponent & FormEntityWithSubEntities;

export interface Button extends FormComponent {
  formComponentType: 'button';
  buttonText?: string;
  type: 'button' | 'submit';
}

export interface PreviousButton extends Omit<Button, 'formComponentType'>, FormComponent {
  formComponentType: 'previousbutton';
  type: 'button';
}

export interface NextButton extends Omit<Button, 'formComponentType'>, FormComponent {
  formComponentType: 'nextbutton';
  type: 'button';
}

export interface Checkbox extends FormComponent {
  formComponentType: 'checkbox';
  label?: string;
}

export interface Dropdown extends FormComponent {
  formComponentType: 'dropdown';
  options: { [value: string]: string };
}

export interface Input extends FormComponent {
  formComponentType: 'input';
}

export interface RadioButton extends FormComponent {
  formComponentType: 'radio';
  options: { [value: string]: string };
}

export interface Text extends FormComponentWithEntities {
  formComponentType: 'text';
  text?: string;
}

export interface TextArea extends FormComponent {
  formComponentType: 'textarea';
}

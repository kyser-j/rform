import type { FormComponent, FormEntityWithSubEntities } from './FormComponents';

type FormComponentWithEntities = FormComponent & FormEntityWithSubEntities;

export interface Button extends FormComponent {
  formComponentType: 'button';
  buttonText?: string;
  type: 'button' | 'submit';
  hasTrackableInputValue: false;
}

export interface PreviousButton extends Omit<Button, 'formComponentType'>, FormComponent {
  formComponentType: 'previousbutton';
  type: 'button';
  hasTrackableInputValue: false;
}

export interface NextButton extends Omit<Button, 'formComponentType'>, FormComponent {
  formComponentType: 'nextbutton';
  type: 'button';
  hasTrackableInputValue: false;
}

export interface Checkbox extends FormComponent {
  formComponentType: 'checkbox';
  label?: string;
  hasTrackableInputValue: true;
}

export interface Dropdown extends FormComponent {
  formComponentType: 'dropdown';
  options: { [value: string]: string };
  hasTrackableInputValue: true;
}

export interface Input extends FormComponent {
  formComponentType: 'input';
  hasTrackableInputValue: true;
}

export interface RadioButton extends FormComponent {
  formComponentType: 'radio';
  options: { [value: string]: string };
  hasTrackableInputValue: true;
}

export interface Text extends FormComponentWithEntities {
  formComponentType: 'text';
  text?: string;
  hasTrackableInputValue: false;
}

export interface TextArea extends FormComponent {
  formComponentType: 'textarea';
  hasTrackableInputValue: true;
}

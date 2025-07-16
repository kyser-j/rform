import type { Button, Checkbox, Dropdown, Input, RadioButton, Text, TextArea } from '../types/BuiltInComponents';
import type { Form, Page, Section } from '../types/FormComponents';

const nameInput: Input = {
  id: 'name',
  name: 'Name',
  discriminator: 'component',
  formComponentType: 'input',
};

const emailInput: Input = {
  id: 'email',
  name: 'Email',
  discriminator: 'component',
  formComponentType: 'input',
};

const areYouCoolCheckbox: Checkbox = {
  id: 'checkbox',
  name: 'checkbox',
  discriminator: 'component',
  formComponentType: 'checkbox',
  label: 'Are you cool?',
};

const favoriteColorDropdown: Dropdown = {
  id: 'dropdown',
  name: 'What is your favorite color?',
  discriminator: 'component',
  formComponentType: 'dropdown',
  options: {
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    indigo: 'indigo',
    violet: 'violet',
  },
};

const maleOrFemaleRadioButtons: RadioButton = {
  id: 'radioButton',
  name: 'radioButton',
  discriminator: 'component',
  formComponentType: 'radio',
  options: {
    male: 'Male',
    female: 'Female',
  },
};

const descriptionTextArea: TextArea = {
  id: 'description',
  name: 'How can we help?',
  discriminator: 'component',
  formComponentType: 'textarea',
};

const text: Text = {
  id: 'text',
  name: 'text',
  discriminator: 'component',
  formComponentType: 'text',
  text: 'Thank you for filling out this form!',
  entities: [],
};

const submitButton: Button = {
  discriminator: 'component',
  id: 'submit',
  name: 'button',
  formComponentType: 'button',
  type: 'submit',
  buttonText: 'Submit',
};

const section: Section = {
  id: 'section-1',
  layout: '1-column',
  entities: [nameInput, emailInput, areYouCoolCheckbox, favoriteColorDropdown, maleOrFemaleRadioButtons, descriptionTextArea, text, submitButton],
  discriminator: 'section',
};

const page: Page = {
  id: 'contact-us-page',
  name: 'Contact Us',
  entities: [section],
  discriminator: 'page',
};

const testForm: Form = {
  id: '12345',
  name: 'My Form',
  pages: [page],
  discriminator: 'form',
};

export default testForm;

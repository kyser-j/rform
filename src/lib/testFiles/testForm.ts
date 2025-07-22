import type { Button, Checkbox, Dropdown, Input, NextButton, RadioButton, Text, TextArea } from '../types/BuiltInComponents';
import type { Page, RForm, Section } from '../types/FormComponents';

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

const nextButton: NextButton = {
  discriminator: 'component',
  id: 'next-button',
  formComponentType: 'nextbutton',
  name: 'next-button',
  type: 'button',
  buttonText: 'Next Page',
};

const submitButton: Button = {
  discriminator: 'component',
  id: 'submit',
  name: 'button',
  formComponentType: 'button',
  type: 'submit',
  buttonText: 'Submit',
};

const section1: Section = {
  id: 'section-1',
  layout: '1-column',
  entities: [nameInput, emailInput, areYouCoolCheckbox, nextButton],
  discriminator: 'section',
};

const section2: Section = {
  id: 'section-2',
  layout: '1-column',
  entities: [favoriteColorDropdown, maleOrFemaleRadioButtons, nextButton],
  discriminator: 'section',
};

const section3: Section = {
  id: 'section-3',
  layout: '1-column',
  entities: [descriptionTextArea, text, submitButton],
  discriminator: 'section',
};

const page1: Page = {
  id: '54742fe6-d15b-410b-859e-e2718913886f',
  name: 'Contact Us 1',
  entities: [section1],
  discriminator: 'page',
  edges: [
    {
      id: '29b507e4-f9a4-40f8-8289-e3b3d4e8ce5a',
      discriminator: 'pageedge',
      destinationPageId: '33629f60-6535-4f10-83c6-3c96faa0593f', // page 2
      name: 'page-edge-1',
    },
  ],
};

const page2: Page = {
  id: '33629f60-6535-4f10-83c6-3c96faa0593f',
  name: 'Contact Us 2',
  entities: [section2],
  discriminator: 'page',
  edges: [
    {
      id: '4db4dbb8-cd31-4239-8f74-f816e6837bda',
      discriminator: 'pageedge',
      destinationPageId: 'f8cc1b3c-b4f6-4c4b-be14-9c2c870ead66', // page 3
      name: 'page-edge-2',
    },
  ],
};

const page3: Page = {
  id: 'f8cc1b3c-b4f6-4c4b-be14-9c2c870ead66',
  name: 'Contact Us 3',
  entities: [section3],
  discriminator: 'page',
  edges: [],
};

export const testForm: RForm = {
  id: '12345',
  name: 'My Form',
  pages: [page1, page2, page3],
  discriminator: 'form',
};

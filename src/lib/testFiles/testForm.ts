import type { Button, Checkbox, Dropdown, Input, NextButton, PreviousButton, RadioButton, Text, TextArea } from '../types/BuiltInComponents';
import type { Page, RForm, Section } from '../types/FormComponents';
import { nextPageClickInteractionRule, previousPageClickInteractionRule } from './testInteractionRules';

const nameInput: Input = {
  rFormId: '45f2f983-e0b3-4783-9340-967bd6d92418',
  htmlId: 'name',
  name: 'Name',
  discriminator: 'component',
  formComponentType: 'input',
};

const emailInput: Input = {
  rFormId: 'a0a8fe75-3de1-4fdf-bd2c-6ad64f2773b0',
  htmlId: 'email',
  name: 'Email',
  discriminator: 'component',
  formComponentType: 'input',
};

const areYouCoolCheckbox: Checkbox = {
  rFormId: '528832dc-3deb-4ce5-99dd-12102f05a0e1',
  htmlId: 'checkbox',
  name: 'checkbox',
  discriminator: 'component',
  formComponentType: 'checkbox',
  label: 'Are you cool?',
};

const favoriteColorDropdown: Dropdown = {
  rFormId: '004b84f5-347f-45a6-a0ef-e6414d85fd2a',
  htmlId: 'dropdown',
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
  rFormId: '0cb875ee-e164-436e-b322-09996e2a9cf4',
  htmlId: 'radioButton',
  name: 'radioButton',
  discriminator: 'component',
  formComponentType: 'radio',
  options: {
    male: 'Male',
    female: 'Female',
  },
};

const descriptionTextArea: TextArea = {
  rFormId: 'c7330e72-2cd3-4a54-aad2-35b5b9dc74d3',
  htmlId: 'description',
  name: 'How can we help?',
  discriminator: 'component',
  formComponentType: 'textarea',
};

const text: Text = {
  rFormId: '9e000b53-f68f-4ca3-b7ed-d8aa7cc9a2b2',
  htmlId: 'text',
  name: 'text',
  discriminator: 'component',
  formComponentType: 'text',
  text: 'Thank you for filling out this form!',
  entities: [],
};

const nextButton: NextButton = {
  rFormId: '0d510e4b-13a8-4321-876e-f088366dca25',
  htmlId: 'next-button',
  discriminator: 'component',
  formComponentType: 'nextbutton',
  name: 'next-button',
  type: 'button',
  buttonText: 'Next Page',
};

const previousbutton: PreviousButton = {
  rFormId: 'c045724b-6ba1-4cb4-ab63-fa02bb7f549d',
  htmlId: 'previous-button',
  discriminator: 'component',
  formComponentType: 'previousbutton',
  name: 'previous-button',
  type: 'button',
  buttonText: 'Previous Page',
};

const submitButton: Button = {
  rFormId: 'b8f8265d-4321-4d45-89cb-6b28a838c5eb',
  htmlId: 'submit',
  discriminator: 'component',
  name: 'button',
  formComponentType: 'button',
  type: 'submit',
  buttonText: 'Submit',
};

const section1: Section = {
  rFormId: 'ace33052-8a25-4637-bd95-899681182c2a',
  htmlId: 'section-1',
  layout: '1-column',
  entities: [nameInput, emailInput, areYouCoolCheckbox, nextButton],
  discriminator: 'section',
};

const section2: Section = {
  rFormId: '0eb1ce03-6327-407d-b784-05e529bc1185',
  htmlId: 'section-2',
  layout: '1-column',
  entities: [favoriteColorDropdown, maleOrFemaleRadioButtons, nextButton, previousbutton],
  discriminator: 'section',
};

const section3: Section = {
  rFormId: '6abdb93b-c0c1-42da-8b88-9d7250cb494c',
  htmlId: 'section-3',
  layout: '1-column',
  entities: [descriptionTextArea, text, previousbutton, submitButton],
  discriminator: 'section',
};

const page1: Page = {
  rFormId: '54742fe6-d15b-410b-859e-e2718913886f',
  htmlId: 'page1',
  name: 'Contact Us 1',
  entities: [section1],
  discriminator: 'page',
  edges: [
    {
      rFormId: '29b507e4-f9a4-40f8-8289-e3b3d4e8ce5a',
      discriminator: 'pageedge',
      destinationPageRFormId: '33629f60-6535-4f10-83c6-3c96faa0593f', // page 2
      name: 'page-edge-1',
    },
  ],
};

const page2: Page = {
  rFormId: '33629f60-6535-4f10-83c6-3c96faa0593f',
  htmlId: 'page2',
  name: 'Contact Us 2',
  entities: [section2],
  discriminator: 'page',
  edges: [
    {
      rFormId: '4db4dbb8-cd31-4239-8f74-f816e6837bda',
      discriminator: 'pageedge',
      destinationPageRFormId: 'f8cc1b3c-b4f6-4c4b-be14-9c2c870ead66', // page 3
      name: 'page-edge-2',
    },
  ],
};

const page3: Page = {
  rFormId: 'f8cc1b3c-b4f6-4c4b-be14-9c2c870ead66',
  htmlId: 'page3',
  name: 'Contact Us 3',
  entities: [section3],
  discriminator: 'page',
  edges: [],
};

export const testForm: RForm = {
  rFormId: '11264c19-725c-4d5f-b00e-3f8bf5aa34a4',
  htmlId: 'testform',
  name: 'My Form',
  discriminator: 'form',
  pages: [page1, page2, page3],
  rules: [previousPageClickInteractionRule, nextPageClickInteractionRule],
};

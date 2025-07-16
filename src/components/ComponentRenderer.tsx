import type { Button, Checkbox, Dropdown, Input, RadioButton, Text, TextArea } from '@/lib/types/BuiltInComponents';
import type { FormComponent } from '@/lib/types/FormComponents';
import ButtonComponent from './built-in/component/ButtonComponent';
import CheckboxComponent from './built-in/component/CheckboxComponent';
import DropdownComponent from './built-in/component/DropdownComponent';
import InputComponent from './built-in/component/InputComponent';
import RadioButtonComponent from './built-in/component/RadioButtonComponent';
import TextAreaComponent from './built-in/component/TextAreaComponent';
import TextComponent from './built-in/component/TextComponent';

interface Props {
  component: FormComponent;
}

const ComponentRenderer = ({ component }: Props) => {
  switch (component.formComponentType) {
    case 'button': {
      return <ButtonComponent component={component as Button} />;
    }
    case 'checkbox': {
      return <CheckboxComponent component={component as Checkbox} />;
    }
    case 'dropdown': {
      return <DropdownComponent component={component as Dropdown} />;
    }
    case 'input': {
      return <InputComponent component={component as Input} />;
    }
    case 'radio': {
      return <RadioButtonComponent component={component as RadioButton} />;
    }
    case 'text': {
      return <TextComponent component={component as Text} />;
    }
    case 'textarea': {
      return <TextAreaComponent component={component as TextArea} />;
    }
    default: {
      return null;
    }
  }
};

export default ComponentRenderer;

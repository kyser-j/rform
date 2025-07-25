import type { RadioButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: RadioButton;
}

const RadioButtonComponent = observer(({ component }: Props) => {
  return (
    <div className='mt-4 flex gap-4' id={component.htmlId}>
      {Object.keys(component.options).map((optionKey) => (
        <label key={optionKey} htmlFor={optionKey} className='flex items-center justify-center hover:cursor-pointer'>
          <input type='radio' className='mr-2 hover:cursor-pointer' id={optionKey} name={component.name} value={optionKey} />
          {component.options[optionKey]}
        </label>
      ))}
    </div>
  );
});

export default RadioButtonComponent;

import type { Checkbox } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Checkbox;
}

const CheckboxComponent = observer(({ component }: Props) => {
  return (
    <div className='mt-4 flex'>
      <label htmlFor={component.htmlId} className='flex items-center justify-center hover:cursor-pointer'>
        <input type='checkbox' id={component.htmlId} className='mr-2 hover:cursor-pointer' />
        {component.label}
      </label>
    </div>
  );
});

export default CheckboxComponent;

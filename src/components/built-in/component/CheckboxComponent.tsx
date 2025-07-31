import { useRFormContext } from '@/lib/hooks/useRFormContext';
import type { Checkbox } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Checkbox;
}

const CheckboxComponent = observer(({ component }: Props) => {
  const { values } = useRFormContext();

  return (
    <div className='mt-4 flex'>
      <label htmlFor={component.htmlId} className='flex items-center justify-center hover:cursor-pointer'>
        <input
          type='checkbox'
          id={component.htmlId}
          className='mr-2 hover:cursor-pointer'
          onChange={(e) => {
            values.updateValue(component.rFormId, e.currentTarget.checked);
          }}
        />
        {component.label}
      </label>
    </div>
  );
});

export default CheckboxComponent;

import { useRFormContext } from '@/lib/hooks/useRFormContext';
import type { Input } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Input;
}

const InputComponent = observer(({ component }: Props) => {
  const { values } = useRFormContext();

  const componentValue = values.getValue(component.rFormId);

  return (
    <div className='mt-4 flex flex-col'>
      <label htmlFor={component.htmlId} className='mb-1 text-xs font-semibold'>
        {component.name}
      </label>
      <input
        id={component.htmlId}
        className='rounded border border-gray-400 bg-white px-2 py-1 inset-shadow-slate-100'
        value={typeof componentValue === 'string' ? componentValue : ''}
        onChange={(e) => {
          values.updateValue(component.rFormId, e.currentTarget.value);
        }}
      />
    </div>
  );
});

export default InputComponent;

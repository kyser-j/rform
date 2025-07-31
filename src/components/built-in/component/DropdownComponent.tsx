import { useRFormContext } from '@/lib/hooks/useRFormContext';
import type { Dropdown } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Dropdown;
}

const DropdownComponent = observer(({ component }: Props) => {
  const { values } = useRFormContext();

  return (
    <div className='mt-4 flex flex-col'>
      <label htmlFor={component.htmlId} className='mb-1 text-xs font-semibold'>
        {component.name}
      </label>
      <select
        id={component.htmlId}
        className='rounded border border-gray-400 bg-white px-2 py-1 inset-shadow-slate-100'
        onChange={(e) => {
          values.updateValue(component.rFormId, e.currentTarget.value);
        }}
      >
        {Object.keys(component.options).map((optionKey) => (
          <option key={optionKey} value={optionKey}>
            {component.options[optionKey]}
          </option>
        ))}
      </select>
    </div>
  );
});

export default DropdownComponent;

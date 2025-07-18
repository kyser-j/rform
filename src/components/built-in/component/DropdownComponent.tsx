import type { Dropdown } from '@/lib/types/BuiltInComponents';

interface Props {
  component: Dropdown;
}

const DropdownComponent = ({ component }: Props) => {
  return (
    <div className='mt-4 flex flex-col'>
      <label htmlFor={component.id} className='mb-1 text-xs font-semibold'>
        {component.name}
      </label>
      <select id={component.id} className='rounded border border-gray-400 bg-white px-2 py-1 inset-shadow-slate-100'>
        {Object.keys(component.options).map((optionKey) => (
          <option key={optionKey} value={optionKey}>
            {component.options[optionKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;

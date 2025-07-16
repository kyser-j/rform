import type { Checkbox } from '@/lib/types/BuiltInComponents';

interface Props {
  component: Checkbox;
}

const CheckboxComponent = ({ component }: Props) => {
  return (
    <div className='mt-4 flex'>
      <label htmlFor={component.id} className='flex items-center justify-center hover:cursor-pointer'>
        <input type='checkbox' id={component.id} className='mr-2 hover:cursor-pointer' />
        {component.label}
      </label>
    </div>
  );
};

export default CheckboxComponent;

import type { Input } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Input;
}

const InputComponent = observer(({ component }: Props) => {
  return (
    <div className='mt-4 flex flex-col'>
      <label htmlFor={component.htmlId} className='mb-1 text-xs font-semibold'>
        {component.name}
      </label>
      <input id={component.htmlId} className='rounded border border-gray-400 bg-white px-2 py-1 inset-shadow-slate-100' />
    </div>
  );
});

export default InputComponent;

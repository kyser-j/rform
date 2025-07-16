import type { TextArea } from '@/lib/types/BuiltInComponents';

interface Props {
  component: TextArea;
}

const TextAreaComponent = ({ component }: Props) => {
  return (
    <div className='mt-4 flex flex-col'>
      <label htmlFor={component.id} className='mb-1 text-xs font-semibold'>
        {component.name}
      </label>
      <textarea id={component.id} className='rounded border border-gray-400 bg-white px-2 py-1 inset-shadow-slate-100'></textarea>
    </div>
  );
};

export default TextAreaComponent;

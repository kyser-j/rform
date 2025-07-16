import type { Button } from '@/lib/types/BuiltInComponents';

interface Props {
  component: Button;
}

const ButtonComponent = ({ component }: Props) => {
  return (
    <div className='mt-4'>
      <button type={component.type} className='rounded border border-amber-700 bg-amber-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-amber-700'>
        {component.buttonText}
      </button>
    </div>
  );
};

export default ButtonComponent;

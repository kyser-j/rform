import type { Button } from '@/lib/types/BuiltInComponents';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Button;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent = observer(({ component, onClick }: Props) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined = onClick ? action((e) => onClick(e)) : undefined;

  return (
    <div className='mt-4'>
      <button
        onClick={handleClick}
        type={component.type}
        className='rounded border border-amber-700 bg-amber-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-amber-700'
      >
        {component.buttonText}
      </button>
    </div>
  );
});

export default ButtonComponent;

import type { Text } from '@/lib/types/BuiltInComponents';

interface Props {
  component: Text;
}

const TextComponent = ({ component }: Props) => {
  return (
    <div className='mt-4'>
      <p id={component.id} className=''>
        {component.text}
      </p>
    </div>
  );
};

export default TextComponent;

import type { Text } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';

interface Props {
  component: Text;
}

const TextComponent = observer(({ component }: Props) => {
  return (
    <div className='mt-4'>
      <p id={component.id} className=''>
        {component.text}
      </p>
    </div>
  );
});

export default TextComponent;

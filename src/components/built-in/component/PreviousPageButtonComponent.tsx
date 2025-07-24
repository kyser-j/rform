import { useRFormProvider } from '@/lib/hooks/useRFormProvider';
import type { PreviousButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: PreviousButton;
}

const PreviousPageButtonComponent = observer(({ component }: Props) => {
  const { pageGraph } = useRFormProvider();

  const handlePreviousPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    pageGraph.transitionToPreviousPage();
  };

  return <ButtonComponent component={{ ...component, formComponentType: 'button' }} onClick={handlePreviousPageButtonClick} />;
});

export default PreviousPageButtonComponent;

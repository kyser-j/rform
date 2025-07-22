import { useRFormProvider } from '@/lib/hooks/useRFormProvider';
import type { NextButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: NextButton;
}

const NextPageButtonComponent = observer(({ component }: Props) => {
  const { pageGraph } = useRFormProvider();

  const handleNextPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    pageGraph.transitionToNextPage();
  };

  return <ButtonComponent component={{ ...component, formComponentType: 'button' }} onClick={handleNextPageButtonClick} />;
});

export default NextPageButtonComponent;

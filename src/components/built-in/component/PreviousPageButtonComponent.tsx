import { useRFormProvider } from '@/lib/hooks/useRFormProvider';
import type { PreviousButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: PreviousButton;
}

const PreviousPageButtonComponent = observer(({ component }: Props) => {
  const { pageGraph, rules } = useRFormProvider(component);

  const hasNavigateOnClickRule = rules?.some((rule) => rule.trigger.type === 'click' && rule.effect.type === 'navigate');

  const handlePreviousPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log({ hasNavigateOnClickRule });
    e.preventDefault();
    pageGraph.transitionToPreviousPage();
  };

  return (
    <ButtonComponent component={{ ...component, formComponentType: 'button' }} onClick={hasNavigateOnClickRule ? handlePreviousPageButtonClick : undefined} />
  );
});

export default PreviousPageButtonComponent;

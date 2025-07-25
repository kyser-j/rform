import { useRFormProvider } from '@/lib/hooks/useRFormProvider';
import type { NextButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: NextButton;
}

const NextPageButtonComponent = observer(({ component }: Props) => {
  const { pageGraph, rules } = useRFormProvider(component);

  const hasNavigateOnClickRule = rules?.some((rule) => rule.trigger.type === 'click' && rule.effect.type === 'navigate');

  const handleNextPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log({ hasNavigateOnClickRule });
    e.preventDefault();
    pageGraph.transitionToNextPage();
  };

  return <ButtonComponent component={{ ...component, formComponentType: 'button' }} onClick={hasNavigateOnClickRule ? handleNextPageButtonClick : undefined} />;
});

export default NextPageButtonComponent;

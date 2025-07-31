import { useRFormContext } from '@/lib/hooks/useRFormContext';
import type { NextButton } from '@/lib/types/BuiltInComponents';
import { observer } from 'mobx-react-lite';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: NextButton;
}

const NextPageButtonComponent = observer(({ component }: Props) => {
  const { pageGraph, rules, values } = useRFormContext(component);

  const hasNavigateOnClickRule = rules?.some((rule) => rule.trigger.type === 'click' && rule.effect.type === 'navigate');

  const handleNextPageButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    pageGraph.transitionToNextPage(values);
  };

  return <ButtonComponent component={{ ...component, formComponentType: 'button' }} onClick={hasNavigateOnClickRule ? handleNextPageButtonClick : undefined} />;
});

export default NextPageButtonComponent;

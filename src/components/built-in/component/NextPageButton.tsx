import type { Button } from '@/lib/types/BuiltInComponents';
import ButtonComponent from './ButtonComponent';

interface Props {
  component: Button;
}

const NextPageButton = ({ component }: Props) => {
  return <ButtonComponent component={component} />;
};

export default NextPageButton;

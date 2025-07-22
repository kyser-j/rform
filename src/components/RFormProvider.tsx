import { RFormContext } from '@/lib/context/rformContext';
import type { RFormState } from '@/lib/types/RFormState';

interface Props {
  children: React.ReactNode;
  rformState: RFormState;
}

const RFormProvider = ({ children, rformState }: Props) => {
  return <RFormContext.Provider value={{ ...rformState }}>{children}</RFormContext.Provider>;
};

export default RFormProvider;

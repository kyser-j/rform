import { MultiDiGraphFactory } from '@/lib/form/MultiDiGraphFactory';
import { testForm } from '@/lib/testFiles/testForm';
import PageRenderer from './PageRenderer';
import RFormProvider from './RFormProvider';

const RFormRenderer = () => {
  const pageGraph = new MultiDiGraphFactory(testForm).create();

  return (
    <RFormProvider rformState={{ pageGraph, rules: testForm.rules }}>
      <form className='mt-16 w-1/3 rounded bg-gray-300 p-8 shadow'>
        {testForm.pages.map((page) => {
          return <PageRenderer key={page.rFormId} page={page} />;
        })}
      </form>
    </RFormProvider>
  );
};

export default RFormRenderer;

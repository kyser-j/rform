import { testForm } from '@/lib/testFiles/testForm';
import PageRenderer from './PageRenderer';

const FormRenderer = () => {
  return (
    <form className='mt-16 w-1/3 rounded bg-gray-300 p-8 shadow'>
      {testForm.pages.map((page) => {
        return <PageRenderer key={page.id} page={page} />;
      })}
    </form>
  );
};

export default FormRenderer;

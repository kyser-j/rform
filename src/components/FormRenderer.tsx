import testForm from '@/lib/test-files/testForm';
import PageRenderer from './PageRenderer';

const FormRenderer = () => {
  return (
    <form className='mt-16 rounded bg-gray-300 p-8 shadow'>
      {testForm.pages.map((page) => {
        return <PageRenderer key={page.id} page={page} />;
      })}
    </form>
  );
};

export default FormRenderer;

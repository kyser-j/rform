import PageRenderer from './components/PageRenderer';
import testForm from './lib/test-files/testForm';

function App() {
  return (
    <section className='flex justify-center mt-32'>
      {testForm.pages.map((page) => (
        <PageRenderer key={page.id} page={page} />
      ))}
    </section>
  );
}

export default App;

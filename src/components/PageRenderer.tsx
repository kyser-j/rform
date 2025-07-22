import { useRFormProvider } from '@/lib/hooks/useRFormProvider';
import type { Page } from '@/lib/types/FormComponents';
import { observer } from 'mobx-react-lite';
import ComponentRenderer from './ComponentRenderer';
import SectionRenderer from './SectionRenderer';

interface Props {
  page: Page;
}

const PageRenderer = observer(({ page }: Props) => {
  const { pageGraph } = useRFormProvider();

  const isCurrentPage = pageGraph.currentPageNodeId === page.id;

  return (
    <div className={`${isCurrentPage ? '' : 'hidden'}`}>
      <h1 className='text-2xl font-semibold'>{page.name}</h1>
      {page.entities?.map((entity) => {
        if (entity.discriminator === 'section') {
          return <SectionRenderer key={entity.id} section={entity} />;
        } else if (entity.discriminator === 'component') {
          return <ComponentRenderer key={entity.id} component={entity} />;
        } else {
          return null;
        }
      })}
    </div>
  );
});

export default PageRenderer;

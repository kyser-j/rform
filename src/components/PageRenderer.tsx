import type { Page } from '@/lib/types/FormComponents';
import ComponentRenderer from './ComponentRenderer';
import SectionRenderer from './SectionRenderer';

interface Props {
  page: Page;
}

const PageRenderer = ({ page }: Props) => {
  return (
    <div>
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
};

export default PageRenderer;

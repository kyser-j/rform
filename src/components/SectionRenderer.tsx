import type { Section } from '@/lib/types/FormComponents';
import { observer } from 'mobx-react-lite';
import ComponentRenderer from './ComponentRenderer';

interface Props {
  section: Section;
}

const SectionRenderer = observer(({ section }: Props) => {
  return (
    <div className='py-4'>
      {section.entities?.map((entity) => {
        if (entity.discriminator === 'section') {
          return <SectionRenderer key={entity.rFormId} section={entity} />;
        } else if (entity.discriminator === 'component') {
          return <ComponentRenderer key={entity.rFormId} component={entity} />;
        } else {
          return null;
        }
      })}
    </div>
  );
});

export default SectionRenderer;

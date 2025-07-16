import type { Section } from '@/lib/types/FormComponents';
import ComponentRenderer from './ComponentRenderer';

interface Props {
  section: Section;
}

const SectionRenderer = ({ section }: Props) => {
  return (
    <div className='py-4'>
      {section.entities?.map((entity) => {
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

export default SectionRenderer;

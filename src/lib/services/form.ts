import { RFormValues } from '../form/RFormValues';
import type { FormComponent, RForm, Section } from '../types/FormComponents';

export const parseOutComponentIds = (form: RForm): RFormValues => {
  const values = new RFormValues();

  for (const page of form.pages) {
    for (const entity of page.entities) {
      parseEntities(entity, values);
    }
  }

  return values;
};

const parseEntities = (entity: Section | FormComponent, values: RFormValues) => {
  if (entity.discriminator === 'component') {
    if (entity.hasTrackableInputValue) {
      values.addValue(entity.rFormId, '');
    }
  } else {
    for (const subEntity of entity.entities) {
      parseEntities(subEntity, values);
    }
  }
};

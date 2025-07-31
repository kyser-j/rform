import { makeAutoObservable } from 'mobx';

export class RFormValues {
  values: { [key: string]: string | boolean };

  constructor() {
    this.values = {};
    makeAutoObservable(this);
  }

  addValue(rFormId: string, value: string | boolean) {
    if (Object.keys(this.values).includes(rFormId)) {
      throw new Error('Adding key that already exists in RFormValues class.');
    }

    this.values[rFormId] = value;
  }

  getValue(rFormId: string) {
    return this.values[rFormId];
  }

  updateValue(rFormId: string, value: string | boolean) {
    if (!Object.keys(this.values).includes(rFormId)) {
      throw new Error('RFormId does not exist in RFormValues class.');
    }

    this.values[rFormId] = value;
  }
}

import { FormArray, AbstractControl } from '@angular/forms';

export const ElementsValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const elements = (control.get('elements') as FormArray).value;
  return elements.length ? null : { noelements: true };
};

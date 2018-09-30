import { ValidatorFn, AbstractControl } from '@angular/forms'

export function nameValidator(): ValidatorFn {
  // matching alphabets and space
  const reg = /^[a-zA-z\ ]{3,}$/g

  return (control: AbstractControl): { [key: string]: any } | null => {
    const allowed = control.value.test(reg)
    return allowed ? null : { Name: { value: 'Invalid Name' } }
  }
}

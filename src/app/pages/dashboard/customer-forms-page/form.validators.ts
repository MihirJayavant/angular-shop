import { AbstractControl, ValidatorFn } from '@angular/forms'

export function nameValidator(): ValidatorFn {
  // Matching alphabets and space
  const reg = /^[a-zA-z ]{3,}$/g

  return (control: AbstractControl): Record<string, any> | null => {
    const allowed = control.value.match(reg)
    return allowed ? null : { Name: { value: 'Invalid Name' } }
  }
}

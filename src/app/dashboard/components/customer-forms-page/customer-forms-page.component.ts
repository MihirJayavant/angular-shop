import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Customer, CustomerType } from '../../models'
import { Store } from '@ngrx/store'
import { CustomerState } from '../../store'
import { FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { customerTypeNames } from '../../helpers'
import { nameValidator } from './form.validators'

@Component({
  selector: 'app-customer-forms-page',
  templateUrl: './customer-forms-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormsPageComponent {
  public customerType = customerTypeNames

  public form = this.formBuilder.group({
    name: ['', [Validators.required, nameValidator]],
    email: ['', [Validators.required, Validators.email]],
    mobile: [0, [Validators.required]],
    customerType: [CustomerType.basic],
    billNumber: [{ value: 0, disabled: false }],
    billAmount: [{ value: 0, disabled: false }]
  })

  constructor(private store: Store<CustomerState>, private formBuilder: FormBuilder) {}

  public onSubmit() {
    const value = this.form.value
  }

  public onReset() {
    this.form.reset()
  }

  public onDropDownChange() {
    const value: string = this.form.value.customerType
    const billNo = this.form.get('billNumber')
    const billAmount = this.form.get('billAmount')
    switch (value) {
      case 'Lead':
        this.patchValue(billNo, 0, true)
        this.patchValue(billAmount, 0, true)
        break
      case 'Customer':
        this.patchValue(billNo, 0, false)
        this.patchValue(billAmount, 0, false)
        break
    }
  }

  private patchValue(
    control: AbstractControl | null,
    value: string | number = '',
    disable: boolean = false
  ) {
    if (control === null) {
      return
    }

    control.patchValue(value)
    disable ? control.disable() : control.enable()
  }
}

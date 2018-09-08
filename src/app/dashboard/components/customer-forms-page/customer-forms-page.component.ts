import { Component } from '@angular/core'
import { Customer, CustomerType } from '../../models'
import { Store } from '@ngrx/store'
import { CustomerState, AddCustomer } from '../../store'
import { FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-customer-forms-page',
  templateUrl: './customer-forms-page.component.html',
  styles: []
})
export class CustomerFormsPageComponent {
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: [0, [Validators.required]],
    customerType: ['Customer'],
    billNumber: [{ value: 0, disabled: false }],
    billAmount: [{ value: 0, disabled: false }]
  })

  constructor(
    private store: Store<CustomerState>,
    private formBuilder: FormBuilder
  ) {}

  public onSubmit() {
    const value = this.form.value
    const c: Customer = <Customer>{
      id: 2,
      name: value.name,
      email: value.email,
      mobile: value.mobile,
      type:
        value.customerType === 'Lead' ? CustomerType.lead : CustomerType.basic
    }
    this.store.dispatch(new AddCustomer(c))
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

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { CustomerState, PostCustomer } from '../../store'
import { FormBuilder, Validators } from '@angular/forms'
import { customerTypeNames } from '../../dashboard.helpers'
import { nameValidator } from './form.validators'
import { CustomerType } from '../../models'

@Component({
  selector: 'app-customer-forms-page',
  templateUrl: './customer-forms-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormsPageComponent {
  public customerType = customerTypeNames

  public form = this.formBuilder.group({
    name: ['', [Validators.required, nameValidator()]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]]
  })

  constructor(private store: Store<CustomerState>, private formBuilder: FormBuilder) {}

  public onSubmit() {
    const value = this.form.value
    this.store.dispatch(
      new PostCustomer({ ...value, type: CustomerType.lead, dateCreated: '2/5/2018' })
    )
  }

  public onReset() {
    this.form.reset()
  }
}

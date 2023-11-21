import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store'
import { CustomerState, PostCustomer } from '../store'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

import { nameValidator } from './form.validators'
import { CustomerType } from 'src/core/customer'

@Component({
  selector: 'app-customer-forms-page',
  templateUrl: './customer-forms-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CustomerFormsPageComponent {
  public customerType = [CustomerType.basic, CustomerType.lead]

  public form = this.formBuilder.group({
    name: ['', [Validators.required, nameValidator()]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
  })

  constructor(private store: Store<CustomerState>, private formBuilder: FormBuilder) {}

  public onSubmit() {
    const value = this.form.value
    this.store.dispatch(
      new PostCustomer({
        id: Math.random() * 1000 + '',
        type: CustomerType.lead,
        dateCreated: '2/5/2018',
        email: value.email ?? '',
        mobile: value.mobile ?? '',
        name: value.name ?? '',
      })
    )
  }

  public onReset() {
    this.form.reset()
  }
}

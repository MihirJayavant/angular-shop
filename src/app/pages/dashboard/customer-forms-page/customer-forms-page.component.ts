import { CustomerState, PostCustomer } from '../store'
import { nameValidator } from './form.validators'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { CustomerType } from 'src/core/customer'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  selector: 'app-customer-forms-page',
  standalone: true,
  styles: [],
  templateUrl: './customer-forms-page.component.html',
})
export class CustomerFormsPageComponent {
  public customerType = [CustomerType.basic, CustomerType.lead]

  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    name: ['', [Validators.required, nameValidator()]],
  })

  constructor(
    private readonly store: Store<CustomerState>,
    private readonly formBuilder: FormBuilder,
  ) {}

  public onSubmit() {
    const { value } = this.form
    const thousand = 1000
    this.store.dispatch(
      new PostCustomer({
        dateCreated: '2/5/2018',
        email: value.email ?? '',
        id: `${Math.random() * thousand}`,
        mobile: value.mobile ?? '',
        name: value.name ?? '',
        type: CustomerType.lead,
      }),
    )
  }

  public onReset() {
    this.form.reset()
  }
}

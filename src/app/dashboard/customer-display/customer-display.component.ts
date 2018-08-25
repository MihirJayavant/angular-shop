import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DashboardState, getAllCustomers } from '../store'

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styles: []
})
export class CustomerDisplayComponent implements OnInit {
  constructor(public store: Store<DashboardState>) {}

  public ngOnInit() {
    this.store.select(getAllCustomers).subscribe(p => console.log(p))
  }
}

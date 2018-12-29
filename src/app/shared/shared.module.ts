import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NavbarComponent,
  MasterDetailComponent,
  MasterComponent,
  DetailComponent
} from './components'
import { ActiveDirective } from './directives'
import { MasterItemDirective } from './directives'

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent,
    ActiveDirective,
    MasterItemDirective
  ],
  exports: [
    NavbarComponent,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent,
    MasterItemDirective
  ]
})
export class SharedModule {}

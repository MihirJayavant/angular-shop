import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NavbarComponent,
  MasterDetailComponent,
  MasterComponent,
  DetailComponent
} from './components'
import { ActiveDirective } from './directives'

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    ActiveDirective,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent
  ],
  exports: [NavbarComponent, MasterDetailComponent, MasterComponent, DetailComponent]
})
export class SharedModule {}

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
import { MasterCaptionComponent } from './components/master-detail/master-caption/master-caption.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent,
    MasterCaptionComponent,
    ActiveDirective,
    MasterItemDirective
  ],
  exports: [
    NavbarComponent,
    MasterDetailComponent,
    MasterComponent,
    DetailComponent,
    MasterCaptionComponent,
    MasterItemDirective
  ]
})
export class SharedModule {}

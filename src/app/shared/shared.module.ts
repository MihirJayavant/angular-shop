import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './components'
import { ActiveDirective } from './directives'

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, ActiveDirective],
  exports: [NavbarComponent]
})
export class SharedModule {}

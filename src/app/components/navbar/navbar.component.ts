import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActiveDirective } from '../../directives/active.directive'

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ActiveDirective],
})
export class NavbarComponent {
  public isActive = false

  constructor() {}

  onMenuClick() {
    this.isActive = !this.isActive
  }
}

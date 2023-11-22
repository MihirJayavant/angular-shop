import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActiveDirective } from '../../directives/active.directive'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ActiveDirective],
  selector: 'app-navbar',
  standalone: true,
  styles: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public isActive = false

  constructor() {}

  onMenuClick() {
    this.isActive = !this.isActive
  }
}

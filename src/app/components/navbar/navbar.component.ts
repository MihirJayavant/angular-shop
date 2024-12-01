import { ActiveDirective } from '../../directives/active.directive'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ActiveDirective],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public isActive = signal(false)

  onMenuClick() {
    this.isActive.update(value => !value)
  }
}

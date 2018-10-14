import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  public isActive = false

  constructor() {}

  onMenuClick() {
    this.isActive = !this.isActive
  }
}

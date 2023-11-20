import { Component, ChangeDetectionStrategy } from '@angular/core'
import { LoginComponent } from '../../components/login/login.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoginComponent],
})
export class HomePageComponent {
  constructor() {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LoginComponent } from '../../components/login/login.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginComponent],
  selector: 'app-home-page',
  standalone: true,
  styles: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}

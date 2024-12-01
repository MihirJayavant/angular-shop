import { LoginComponent } from '../../components/login/login.component'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginComponent],
  selector: 'app-home-page',
  standalone: true,
  styles: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}

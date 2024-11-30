import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { animate, group, query, style, transition, trigger } from '@angular/animations'
import { NavbarComponent } from '../../components'

export const routerTransition = trigger('routerTransition', [
  transition('FormsPage => DisplayPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      // Block executes in parallel
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
  transition('DisplayPage => FormsPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      // Block executes in parallel
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
])

@Component({
  animations: [routerTransition],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarComponent, RouterLinkActive, RouterLink, RouterOutlet],
  selector: 'app-dashboard',
  standalone: true,
  styles: '',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor() {}

  public getState(outlet: RouterOutlet) {
    // eslint-disable-next-line dot-notation
    return outlet.activatedRouteData['animation']
  }
}

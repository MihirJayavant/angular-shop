import { Component, ChangeDetectionStrategy } from '@angular/core'
import { trigger, transition, query, style, group, animate } from '@angular/animations'
import { RouterOutlet } from '@angular/router'

export const routerTransition = trigger('routerTransition', [
  transition('FormsPage => DisplayPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition('DisplayPage => FormsPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ],
        { optional: true }
      )
    ])
  ])
])

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
  animations: [routerTransition],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  constructor() {}

  public getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation
  }
}

/* eslint-disable sort-keys */
import { MasterItemDirective } from '../../directives'
import { animate, style, transition, trigger } from '@angular/animations'
import { NgFor, NgTemplateOutlet } from '@angular/common'
import { Component, ContentChild, Input, TemplateRef } from '@angular/core'

@Component({
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate(
          '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate(
          '1s cubic-bezier(.8, -0.6, 0.7, 1.0)',
          style({
            transform: 'scale(0.5)',
            opacity: 0,
            height: '0px',
            margin: '0px',
          }),
        ),
      ]),
    ]),
  ],
  imports: [NgFor, NgTemplateOutlet],
  selector: 'app-master-detail',
  standalone: true,
  templateUrl: './master-detail.component.html',
})
export class MasterDetailComponent {
  @Input({ required: true })
  dataList: Iterable<any> = []

  @ContentChild(MasterItemDirective, { read: TemplateRef, static: true }) masterItemTemplate: any
}

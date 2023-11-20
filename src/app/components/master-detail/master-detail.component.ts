import { Component, Input, ContentChild, TemplateRef } from '@angular/core'
import { MasterItemDirective } from '../../directives'
import { transition, style, animate, trigger } from '@angular/animations'
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { HeightDirective } from '../../directives/height.directive';

@Component({
    selector: 'shared-master-detail',
    templateUrl: './master-detail.component.html',
    animations: [
        trigger('items', [
            transition(':enter', [
                style({ transform: 'scale(0.5)', opacity: 0 }),
                animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(1)', opacity: 1 })) // final
            ]),
            transition(':leave', [
                style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                animate('1s cubic-bezier(.8, -0.6, 0.7, 1.0)', style({
                    transform: 'scale(0.5)',
                    opacity: 0,
                    height: '0px',
                    margin: '0px'
                }))
            ])
        ])
    ],
    standalone: true,
    imports: [HeightDirective, NgFor, NgTemplateOutlet]
})
export class MasterDetailComponent {
  @Input()
  dataList: Iterable<any> = []

  @Input()
  reducedHeight = 0

  @ContentChild(MasterItemDirective, { read: TemplateRef, static: true }) masterItemTemplate: any
}

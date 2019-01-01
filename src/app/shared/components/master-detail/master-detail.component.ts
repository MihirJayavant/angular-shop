import { Component, Input, ContentChild, TemplateRef } from '@angular/core'
import { MasterItemDirective } from '../../directives'

@Component({
  selector: 'shared-master-detail',
  templateUrl: './master-detail.component.html'
})
export class MasterDetailComponent {
  @Input()
  dataList: any[] = []

  @Input()
  reducedHeight = 0

  @ContentChild(MasterItemDirective, { read: TemplateRef }) masterItemTemplate: any
}

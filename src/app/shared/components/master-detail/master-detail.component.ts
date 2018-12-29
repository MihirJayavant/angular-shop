import { Component, Input, ContentChild, TemplateRef } from '@angular/core'
import { MasterItemDirective } from '../../directives'

@Component({
  selector: 'shared-master-detail',
  templateUrl: './master-detail.component.html'
})
export class MasterDetailComponent {
  @Input()
  dataList: any[] = []

  @ContentChild(MasterItemDirective, { read: TemplateRef }) masterItemTemplate: any
}

import { Directive } from '@angular/core'

@Directive({
  selector: '[appMasterItem]',
  standalone: true,
})
export class MasterItemDirective {
  constructor() {}
}

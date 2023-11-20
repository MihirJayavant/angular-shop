import { Directive } from '@angular/core';

@Directive({
    selector: '[sharedMasterItem]',
    standalone: true
})
export class MasterItemDirective {
  constructor() { }
}
import {Component} from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
@Component({
 selector:'app-builtin-directive',
 template:`
 <div>
 <ul><li *ngFor="let country of countries; let i=index">{{i}}-{{country}}
  <span *ngIf="country === homeCountry; else foriegn">(Home)</span>
 </li>
 </ul>

 </div>
 <ng-template #foriegn>
 (Alien)
 </ng-template>
 `
})
export class BuiltinDirectiveComponent{
  countries =['uk','usa','india'];
  homeCountry='india'
}

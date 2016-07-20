import { Component } from '@angular/core';
import { INDEX } from './demo-index/index';

@Component({
  moduleId: module.id,
  selector: 'thoughtram-demos-app',
  templateUrl: 'thoughtram-demos.component.html',
  styleUrls: ['thoughtram-demos.component.css']
})
export class ThoughtramDemosAppComponent {
  constructor () {
    console.log(INDEX);
  }
  index = INDEX;
}

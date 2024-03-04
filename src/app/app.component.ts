import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'myapp';
  destroyButton: boolean = true;
  myName = "omprakash";

  onDestroyComponent(val: any) {
    this.destroyButton = !this.destroyButton;
    this.myName = val.value;
  }

}

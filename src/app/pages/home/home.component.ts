import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  @Input() myname: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange hook is calling");
    console.log("my name: ", this.myname);
  }

  ngOnDestroy() {
    console.log("Destroy component is calling ...");
  }
}

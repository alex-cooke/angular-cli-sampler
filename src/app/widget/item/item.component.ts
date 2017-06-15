import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'widget-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  someProperty: string = "some value";
  
  @Input()
  item: any;

  @Output()
  widgetClick = new EventEmitter()

  handleClickMe(){
    this.widgetClick.emit('foo');
  }

  log(value: string) {
    console.log(value);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  items: any[] = [
    {
      code: 'A',
      name: "Widget A"
    },
    {
      code: 'B',
      name: 'Widget B'
    }
  ];

  widgetClicked(event: any, widget: any) {
    console.log(event);
    console.log(widget);
  }


  ngOnInit() {
  }

}

import { WidgetService } from '../widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  items: any[];

  constructor (private widgetService: WidgetService) {  }

  widgetClicked(event: any, widget: any) {
    console.log(event);
    console.log(widget);
  }


  async ngOnInit() {
    this.items = await this.widgetService.getWidgets();
  }

}

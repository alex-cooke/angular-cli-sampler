import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  widget: any;

  constructor(
      private widgetService: WidgetService,
      private route: ActivatedRoute) { }

  async ngOnInit() {
    this.widget = await this.widgetService.getWidget(this.route.snapshot.params['code']);
  }

}

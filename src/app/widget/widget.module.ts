import { RouteActivatorService } from './route-activator.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { QueryComponent } from './query/query.component';
import { ItemComponent } from './item/item.component';
import { WidgetService } from "./widget.service";
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetRoutingModule
  ],
  declarations: [QueryComponent, ItemComponent, ViewComponent, CreateComponent],
  providers: [
    WidgetService,
    RouteActivatorService,
    {
     provide: 'canDeactivateCreateWidget',
     useValue: checkDirtyState}
  ]
})
export class WidgetModule { }

function checkDirtyState(component: CreateComponent) {
  if (component.isDirty) {
    return window.confirm("Do you really want to cancel?");
  } else {
    return true;
  }
}

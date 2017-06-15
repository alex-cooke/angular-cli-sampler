import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { QueryComponent } from './query/query.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetRoutingModule
  ],
  declarations: [QueryComponent, ItemComponent]
})
export class WidgetModule { }

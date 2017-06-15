import { RouteActivatorService } from './route-activator.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryComponent } from "./query/query.component";
import { ViewComponent } from "./view/view.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
  {
    path: 'widget',
    component:QueryComponent,
    pathMatch: 'full'
  },
  {
    path: 'widget/create',
    component:CreateComponent,
    canDeactivate: ['canDeactivateCreateWidget']
  },
  {
    path: 'widget/:code',
    component: ViewComponent,
    canActivate: [RouteActivatorService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }

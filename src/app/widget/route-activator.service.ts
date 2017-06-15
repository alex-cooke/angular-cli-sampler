import { WidgetService } from './widget.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteActivatorService implements CanActivate {

  constructor(private widgetService: WidgetService, private router: Router) { 


  }

  async canActivate(route: ActivatedRouteSnapshot) {

    let widgetCode = route.params['code'];

    if (<boolean>(await this.widgetService.getWidget(widgetCode))) {
      return true;
    }
    else {
      this.router.navigate(['/404']);
      return false;      
    }

  }

}

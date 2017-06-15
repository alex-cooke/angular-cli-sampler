import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmailComponent } from './email/email.component';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [EmailComponent, AdminComponent, UsersComponent]
})
export class AdminModule { }

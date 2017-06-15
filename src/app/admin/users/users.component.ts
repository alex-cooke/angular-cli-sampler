import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[];
  hasPermission: boolean = false;

  constructor() { }

  ngOnInit() {
    
    if (this.hasPermission) {

      this.getUserss()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));

    } else {

      this.users = [];
      
    }

  }

  async getUserss() {
    return [
      { name: "john", email: 'john@angular.com' },
      { name: "jame", email: 'jane@angular.com'}
    ];
  }

}

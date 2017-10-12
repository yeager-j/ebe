import { Component, OnInit } from '@angular/core';
import { User } from '../../common/classes/user';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];
  filteredUsers: User[];
  filter = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterUsers(value) {
    value = value.toLowerCase();

    this.filteredUsers = this.users.filter(user => {
      for (let key in user) {
        if (typeof user[key] === 'string' && user[key].toLowerCase().includes(value)) {
          return true;
        }
      }

      return false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../../common/classes/user';
import { UserService } from '../../../common/services/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  errors: string[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => this.userService.get(param.get('username')))
      .subscribe(user => {
        this.user = user;
      });
  }

  editUser() {
    console.log(this.user.rank);
    this.userService.update(this.user).subscribe(res => {
      this.router.navigate(['/admin', 'manage-users', res.json().email]);
    }, error => {
      this.errors = error.json().errors;
    });
  }
}

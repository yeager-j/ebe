import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errors: string[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(response => {
      localStorage.setItem('ebe.token', response.json().token);
      this.router.navigate(['/landing']);
    }, error => {
      this.errors = error.json().errors;
    });
  }
}

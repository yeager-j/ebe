import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from './common/classes/user';
import { UserService } from './common/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('wrapper') wrapper: ElementRef;
  public static currentUser: Observable<User>;

  classMap = {
    'landing': 'landing-page',
    'register': 'signup-page',
    'login': 'login-page',
    'manage-users': 'profile-page'
  };

  constructor(private router: Router, private renderer: Renderer2, private userService: UserService) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        for (let i = 0; i < event.url.split('/').length; i++) {
          let url = event.url.split('/')[i];

          if (this.classMap.hasOwnProperty(url)) {
            this.renderer.addClass(this.wrapper.nativeElement, this.classMap[url]);
          }
        }
      }

      AppComponent.currentUser = this.userService.getCurrent();
    });
  }

  doesMatchRoute(route, check) {
    let routeArr = route.split('/').slice(1);
    let checkArr = check.split('/').slice(1);

    if (routeArr.length !== checkArr.length) {
      return false;
    }

    for (let i = 0; i < routeArr.length; i++) {
      if (routeArr[i].includes(':')) {
        continue;
      }

      if (routeArr[i] !== checkArr[i]) {
        return false;
      }
    }

    return true;
  }
}

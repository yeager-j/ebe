import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminProfileComponent } from './admin/profile/profile.component';
import { AuthGuard } from './common/guards/auth.guard';
import { AdminGuard } from './common/guards/admin.guard';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { GuestGuard } from './common/guards/guest.guard';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { ManageDataComponent } from './admin/manage-data/manage-data.component';
import { EditUserComponent } from './admin/profile/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-users/:username', component: AdminProfileComponent },
      { path: 'manage-users/:username/edit', component: EditUserComponent },
      { path: 'manage-data', component: ManageDataComponent },
      { path: 'analytics/:username', component: AnalyticsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

  { path: '**', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}

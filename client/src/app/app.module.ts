import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/partials/navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { AppRouterModule } from './app.router';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './common/partials/footer/footer.component';
import { UserService } from './common/services/user.service';
import { AppAuthModule } from './app.auth';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CapitalizePipe } from './common/pipes/capitalize.pipe';
import { AuthService } from './common/services/auth.service';
import { AdminProfileComponent } from './admin/profile/profile.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminGuard } from './common/guards/admin.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { GuestGuard } from './common/guards/guest.guard';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UserCardComponent } from './common/partials/user-card/user-card.component';
import { ManageDataComponent } from './admin/manage-data/manage-data.component';
import { TrainingBlocksComponent } from './admin/profile/training-blocks/training-blocks.component';
import { EditUserComponent } from './admin/profile/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    LoginComponent,
    FooterComponent,
    CapitalizePipe,
    AdminProfileComponent,
    ManageUsersComponent,
    AnalyticsComponent,
    SettingsComponent,
    UserCardComponent,
    ManageDataComponent,
    TrainingBlocksComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    AppAuthModule,
    HttpModule
  ],
  providers: [UserService, AuthService, AdminGuard, AuthGuard, GuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

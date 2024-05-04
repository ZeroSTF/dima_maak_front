import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { HomeBackComponent } from './BackOffice/home-back/home-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { SignupComponent } from './FrontOffice/signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './BackOffice/user-back/user-list/user-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './FrontOffice/profile/profile.component';
import {AuthInterceptor} from "./Service/auth.interceptor";
import {AuthGuard} from "./auth.guard";
import { EditProfileComponent } from './FrontOffice/edit-profile/edit-profile.component';
import { FrontNotificationsComponent } from './FrontOffice/front-notifications/front-notifications.component';
import { NotificationDetailsComponent } from './FrontOffice/notification-details/notification-details.component';
import { ShowUserComponent } from './BackOffice/user-back/show-user/show-user.component';
import { EditUserComponent } from './BackOffice/user-back/edit-user/edit-user.component';
import { AddUserComponent } from './BackOffice/user-back/add-user/add-user.component';
import { NotificationListComponent } from './BackOffice/notification-back/notification-list/notification-list.component';
import { ShowNotificationComponent } from './BackOffice/notification-back/show-notification/show-notification.component';
import { EditNotificationComponent } from './BackOffice/notification-back/edit-notification/edit-notification.component';
import { AddNotificationComponent } from './BackOffice/notification-back/add-notification/add-notification.component';
import { VerifiedComponent } from './FrontOffice/verified/verified.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeBackComponent,
    HomeFrontComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    ProfileComponent,
    EditProfileComponent,
    FrontNotificationsComponent,
    NotificationDetailsComponent,
    ShowUserComponent,
    EditUserComponent,
    AddUserComponent,
    NotificationListComponent,
    ShowNotificationComponent,
    EditNotificationComponent,
    AddNotificationComponent,
    VerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

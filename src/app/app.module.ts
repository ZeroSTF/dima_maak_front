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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './FrontOffice/profile/profile.component';
import {AuthInterceptor} from "./Service/auth.interceptor";
import {AuthGuard} from "./auth.guard";
import { EditProfileComponent } from './FrontOffice/edit-profile/edit-profile.component';
import { FrontNotificationsComponent } from './FrontOffice/front-notifications/front-notifications.component';
import { NotificationDetailsComponent } from './FrontOffice/notification-details/notification-details.component';
import { AddComplaintComponent } from './FrontOffice/complaint/add-complaint/add-complaint.component';
import { ListComplaintComponent } from './FrontOffice/complaint/list-complaint/list-complaint.component';
import { UpdateComplaintComponent } from './FrontOffice/complaint/update-complaint/update-complaint.component';
import { DetailComplaintComponent } from './FrontOffice/complaint/detail-complaint/detail-complaint.component';
import { AddComplaintBackComponent } from './BackOffice/complaint/add-complaint-back/add-complaint-back.component';
import { ListComplaintBackComponent } from './BackOffice/complaint/list-complaint-back/list-complaint-back.component';
import { EditComplaintBackComponent } from './BackOffice/complaint/edit-complaint-back/edit-complaint-back.component';
import { DetailComplaintBackComponent } from './BackOffice/complaint/detail-complaint-back/detail-complaint-back.component';
import { ListPostComponent } from './FrontOffice/post/list-post/list-post.component';
import { ListCommentComponent } from './BackOffice/comment/list-comment/list-comment.component';
import { DetailCommentComponent } from './BackOffice/comment/detail-comment/detail-comment.component';
import { UpdateCommentComponent } from './BackOffice/comment/update-comment/update-comment.component';
import { UpdatePostComponent } from './FrontOffice/post/update-post/update-post.component';
import { StatPostComponent } from './BackOffice/post/stat-post/stat-post.component';
import { ListPostBackComponent } from './BackOffice/post/list-post-back/list-post-back.component';

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
    AddComplaintComponent,
    ListComplaintComponent,
    UpdateComplaintComponent,
    DetailComplaintComponent,
    AddComplaintBackComponent,
    ListComplaintBackComponent,
    EditComplaintBackComponent,
    DetailComplaintBackComponent,
    ListPostComponent,
    ListCommentComponent,
    DetailCommentComponent,
    UpdateCommentComponent,
    UpdatePostComponent,
    StatPostComponent,
    ListPostBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

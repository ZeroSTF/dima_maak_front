import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {HomeBackComponent} from "./BackOffice/home-back/home-back.component";
import {HomeFrontComponent} from "./FrontOffice/home-front/home-front.component";
import {LoginComponent} from "./FrontOffice/login/login.component";
import {SignupComponent} from "./FrontOffice/signup/signup.component";
import {UserListComponent} from "./BackOffice/user-back/user-list/user-list.component";
import {AuthGuard} from "./auth.guard";
import {ProfileComponent} from "./FrontOffice/profile/profile.component";
import {EditProfileComponent} from "./FrontOffice/edit-profile/edit-profile.component";
import {FrontNotificationsComponent} from "./FrontOffice/front-notifications/front-notifications.component";
import {NotificationDetailsComponent} from "./FrontOffice/notification-details/notification-details.component";
import {ShowUserComponent} from "./BackOffice/user-back/show-user/show-user.component";
import {EditUserComponent} from "./BackOffice/user-back/edit-user/edit-user.component";
import {AddUserComponent} from "./BackOffice/user-back/add-user/add-user.component";
import {NotificationListComponent} from "./BackOffice/notification-back/notification-list/notification-list.component";
import {ShowNotificationComponent} from "./BackOffice/notification-back/show-notification/show-notification.component";
import {EditNotificationComponent} from "./BackOffice/notification-back/edit-notification/edit-notification.component";
import {AddNotificationComponent} from "./BackOffice/notification-back/add-notification/add-notification.component";
import {VerifiedComponent} from "./FrontOffice/verified/verified.component";

const routes: Routes = [
  {
    path: "",
    component: AllTemplateFrontComponent,
    children: [
      {
        path: "",
        component: HomeFrontComponent,
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "profile",
        component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: "profile/:userId",
        component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: "editProfile",
        component: EditProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: "notifications",
        component: FrontNotificationsComponent, canActivate: [AuthGuard]
      },
      {
        path: "notification/:id",
        component: NotificationDetailsComponent, canActivate: [AuthGuard]
      },
      {
        path: "verify",
        component: VerifiedComponent
      }
    ]
  },
  {
    path: "admin",
    component: AllTemplateBackComponent,
    children: [
      {
        path: "",
        component: HomeBackComponent, canActivate: [AuthGuard]
      },
      {
        path: "user",
        component: UserListComponent, canActivate: [AuthGuard]
      },
      {
        path: "profile/:userId",
        component: ShowUserComponent, canActivate: [AuthGuard]
      },
      {
        path:"editUser/:userId",
        component: EditUserComponent, canActivate: [AuthGuard]
      },
      {
        path:"addUser",
        component: AddUserComponent, canActivate: [AuthGuard]
      },
      {
        path:"notification",
        component: NotificationListComponent, canActivate: [AuthGuard]
      },
      {
        path: "notification/:current",
        component: NotificationListComponent, canActivate: [AuthGuard]
      },
      {
        path: "viewNotification/:id",
        component: ShowNotificationComponent, canActivate: [AuthGuard]
      },
      {
        path:"editNotification/:id",
        component: EditNotificationComponent, canActivate: [AuthGuard]
      },
      {
        path:"addNotification",
        component: AddNotificationComponent, canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

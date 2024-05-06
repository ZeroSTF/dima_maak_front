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
import { AddComplaintComponent } from './FrontOffice/complaint/add-complaint/add-complaint.component';
import { ListComplaintComponent } from './FrontOffice/complaint/list-complaint/list-complaint.component';
import { UpdateComplaintComponent } from './FrontOffice/complaint/update-complaint/update-complaint.component';
import { DetailComplaintComponent } from './FrontOffice/complaint/detail-complaint/detail-complaint.component';
import { ListComplaintBackComponent } from './BackOffice/complaint/list-complaint-back/list-complaint-back.component';
import { EditComplaintBackComponent } from './BackOffice/complaint/edit-complaint-back/edit-complaint-back.component';
import { DetailComplaintBackComponent } from './BackOffice/complaint/detail-complaint-back/detail-complaint-back.component';
import { ListPostComponent } from './FrontOffice/post/list-post/list-post.component';
import { ListCommentComponent } from './BackOffice/comment/list-comment/list-comment.component';
import { DetailCommentComponent } from './BackOffice/comment/detail-comment/detail-comment.component';
import { UpdateCommentComponent } from './BackOffice/comment/update-comment/update-comment.component';
import { StatPostComponent } from './BackOffice/post/stat-post/stat-post.component';
import { ListPostBackComponent } from './BackOffice/post/list-post-back/list-post-back.component';

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
        path: "addComplaint",
        component: AddComplaintComponent
      },
      {
        path: "ListComplaint",
        component: ListComplaintComponent
      },
      { path: 'updateComplaint/:id', component: UpdateComplaintComponent },
      { path: 'detailComplaint/:id', component: DetailComplaintComponent },
      { path: 'ListPost', component: ListPostComponent },
    ]
  },
  {
    path: "admin",
    component: AllTemplateBackComponent,
    children: [
      {
        path: "",
        component: HomeBackComponent
      },
      {
        path: "user",
        component: UserListComponent
      },
      {
        path: "ListComplaintBack",
        component: ListComplaintBackComponent
      },
    
      { path: 'updateComplaintBack/:id', component: EditComplaintBackComponent },
      { path: 'detailComplaintBack/:id', component: DetailComplaintBackComponent },
      {
        path: "ListCommentBack",
        component: ListCommentComponent
      },
      {
        path: "detailCommentBack/:id",
        component: DetailCommentComponent
      },
      {
        path: "updateCommentBack/:id",
        component: UpdateCommentComponent
      },
      {
        path: "statPost",
        component: StatPostComponent
      },
      {
        path: "ListPostBack",
        component: ListPostBackComponent
      },
      

    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

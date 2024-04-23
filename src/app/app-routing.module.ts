import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {HomeBackComponent} from "./BackOffice/home-back/home-back.component";
import {HomeFrontComponent} from "./FrontOffice/home-front/home-front.component";
import {LoginComponent} from "./FrontOffice/login/login.component";
import {SignupComponent} from "./FrontOffice/signup/signup.component";
import {UserListComponent} from "./BackOffice/user-back/user-list/user-list.component";

const routes: Routes = [
  {
    path:"",
    component:AllTemplateFrontComponent,
    children:[
      {
        path:"",
        component:HomeFrontComponent
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"signup",
        component: SignupComponent
      }
    ]
  },
  {
    path:"admin",
    component:AllTemplateBackComponent,
    children:[
      {
        path:"",
        component:HomeBackComponent
      },
      {
        path:"user",
        component: UserListComponent,
        children:[
          {
            path:""
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

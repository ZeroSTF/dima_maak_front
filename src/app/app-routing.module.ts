import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {HomeBackComponent} from "./BackOffice/home-back/home-back.component";
import {HomeFrontComponent} from "./FrontOffice/home-front/home-front.component";
import {LoginComponent} from "./FrontOffice/login/login.component";
import {SignupComponent} from "./FrontOffice/signup/signup.component";
import {VenturesComponent} from "./Ventures/ventures/ventures.component";
import {VentureAddComponent} from "./Ventures/venture-add/venture-add.component";
import {AddinvestmentComponent} from "./Investments/addinvestment/addinvestment.component";
import {UpdateventureComponent} from "./Ventures/updateventure/updateventure.component";

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
        path:"venture",
        component:VenturesComponent
      },
      {
        path:"addventures",
        component:VentureAddComponent
      },
      {
        path:"addinvestment",
        component:AddinvestmentComponent
      },
      {
        path:"updateventure/:id",
        component:UpdateventureComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import {UpdateventureComponent} from "./Ventures/updateventure/updateventure.component";
import {ProcessexcelComponent} from "./Ventures/processexcel/processexcel.component";
import {VenturesfrontComponent} from "./Ventures/venturesfront/venturesfront.component";
import {InvestmentformComponent} from "./Investments/investmentform/investmentform.component";
import {AllinvestmentsComponent} from "./Investments/allinvestments/allinvestments.component";
import {AllreturnsComponent} from "./Returns/allreturns/allreturns.component";
import {InvestorsComponent} from "./User/investors/investors.component";
import {InvestorsScoresComponent} from "./User/investors-scores/investors-scores.component";

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
      },
      {
        path:"venturefront",
        component:VenturesfrontComponent
      },
      {
        path:"investmentform/:id",
        component:InvestmentformComponent
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
        path:"updateventure/:id",
        component:UpdateventureComponent
      },
      {
        path:"processexcel",
        component:ProcessexcelComponent
      },
      {
        path:"allinvestments",
        component:AllinvestmentsComponent
      },
      {
        path:"allreturns",
        component:AllreturnsComponent
      },
      {
        path:"investors",
        component:InvestorsComponent
      },
      {
        path:"score",
        component:InvestorsScoresComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

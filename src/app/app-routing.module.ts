import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { InsurancePackOffersComponent } from './FrontOffice/Insurance-Pack-Front/insurance-pack-offers/insurance-pack-offers.component';
import { InsuranceListComponent } from './BackOffice/Insurance-Back/insurance-list/insurance-list.component';
import { InsurancepackComponent } from './BackOffice/insurancepack/insurancepack.component';
import { PremiumComponent } from './BackOffice/premium/premium.component';
import { ClaimComponent } from './BackOffice/claim/claim.component';
import { PaypremiumComponent } from './FrontOffice/paypremium/paypremium.component';

const routes: Routes = [
  {
    path:"",
    component:AllTemplateFrontComponent,
    children:[
      {
        path:"",
        component:HomeFrontComponent,
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
        path:"profile",
        component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path:"profile/:userId",
        component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path:"editProfile",
        component: EditProfileComponent, canActivate: [AuthGuard]
      },
      {
        path:"InsurancePacks",
        component:InsurancePackOffersComponent
      },   {
        path:"payment/:id/:amount",
        component:PaypremiumComponent
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
        component:UserListComponent
      },
      {
        path:"insurancelist", 
        component:InsuranceListComponent
      },
      {
        path:"packlist", 
        component:InsurancepackComponent
      },
      {
        path:"claim", 
        component:ClaimComponent
      },
      {
        path:"premium", 
        component:PremiumComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
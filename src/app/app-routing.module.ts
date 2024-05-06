import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateFrontComponent} from "./FrontOffice/all-template-front/all-template-front.component";
import {AllTemplateBackComponent} from "./BackOffice/all-template-back/all-template-back.component";
import {HomeBackComponent} from "./BackOffice/home-back/home-back.component";
import {HomeFrontComponent} from "./FrontOffice/home-front/home-front.component";
import {LoginComponent} from "./FrontOffice/login/login.component";
import {SignupComponent} from "./FrontOffice/signup/signup.component";
import {UserListComponent} from "./BackOffice/user-back/user-list/user-list.component";
import {ProfileComponent} from "./FrontOffice/profile/profile.component";
import { AssetComponent } from './BackOffice/asset/asset.component';
import { LeasingComponent } from './BackOffice/leasing/leasing.component';
import { DemandeComponent } from './BackOffice/demande/demande.component';
import { AssetclientComponent } from './FrontOffice/assetclient/assetclient.component';
import { PaymentComponent } from './FrontOffice/payment/payment.component';
import { ConfirmationComponent } from './BackOffice/confirmation/confirmation.component';

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
        path:"confirme/:id",
        component: ConfirmationComponent
      },
      {
        path:"signup",
        component: SignupComponent
      },
      {
        path:"assetclient",
        component:AssetclientComponent
      },
      {
        path:"payment",
        component:PaymentComponent
      },
      {
        path:"profile",
        component: ProfileComponent
      },
      {
        path:"profile/:userId",
        component: ProfileComponent
      }
    ]
  },
  {
    path:"asset",
    component:AssetComponent
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
        path:"asset",
        component:AssetComponent
      },
      {
        path:"leasing/:id",
    component:LeasingComponent
      },
      
      {
        path:"demande",
    component:DemandeComponent
      },
      {
        path:"user",
        component:UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

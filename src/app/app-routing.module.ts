import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {UserListComponent} from "./BackOffice/user-back/user-list/user-list.component";
import { AssetComponent } from './BackOffice/asset/asset.component';
import { LeasingComponent } from './BackOffice/leasing/leasing.component';
import { DemandeComponent } from './BackOffice/demande/demande.component';
import { AssetclientComponent } from './FrontOffice/assetclient/assetclient.component';
import { PaymentComponent } from './FrontOffice/payment/payment.component';
import { ConfirmationComponent } from './BackOffice/confirmation/confirmation.component';
import {AuthGuard} from "./auth.guard";
import {ProfileComponent} from "./FrontOffice/profile/profile.component";
import {EditProfileComponent} from "./FrontOffice/edit-profile/edit-profile.component";
import { InsurancePackOffersComponent } from './FrontOffice/Insurance-Pack-Front/insurance-pack-offers/insurance-pack-offers.component';
import { InsuranceListComponent } from './BackOffice/Insurance-Back/insurance-list/insurance-list.component';
import { InsurancepackComponent } from './BackOffice/insurancepack/insurancepack.component';
import { PremiumComponent } from './BackOffice/premium/premium.component';
import { ClaimComponent } from './BackOffice/claim/claim.component';
import { PaypremiumComponent } from './FrontOffice/paypremium/paypremium.component';
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
import {StatsUserComponent} from "./BackOffice/user-back/stats-user/stats-user.component";
import {LoyaltyListComponent} from "./BackOffice/loyalty-back/loyalty-list/loyalty-list.component";
import {AddLoyaltyComponent} from "./BackOffice/loyalty-back/add-loyalty/add-loyalty.component";
import {EditLoyaltyComponent} from "./BackOffice/loyalty-back/edit-loyalty/edit-loyalty.component";
import {ShowLoyaltyComponent} from "./BackOffice/loyalty-back/show-loyalty/show-loyalty.component";

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
        path:"confirme/:id",
        component: ConfirmationComponent
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
        path: "signup",
        component: SignupComponent
      },
      {
        path: "signup/:id",
        component: SignupComponent
      },
      {
        path:"venturefront",
        component:VenturesfrontComponent
      },
      {
        path:"investmentform/:id",
        component:InvestmentformComponent
      },
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
        path:"InsurancePacks",
        component:InsurancePackOffersComponent
      },   {
        path:"payment/:id/:amount",
        component:PaypremiumComponent
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
    path:"asset",
    component:AssetComponent
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
      },
      {
        path: "userStats",
        component: StatsUserComponent, canActivate: [AuthGuard]
      },
      {
        path: "loyalty",
        component: LoyaltyListComponent, canActivate: [AuthGuard]
      },
      {
        path: "addLoyalty",
        component: AddLoyaltyComponent, canActivate: [AuthGuard]
      },
      {
        path: "editLoyalty/:id",
        component: EditLoyaltyComponent, canActivate: [AuthGuard]
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
      },
      {
        path: "viewLoyalty/:id",
        component: ShowLoyaltyComponent, canActivate: [AuthGuard]
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

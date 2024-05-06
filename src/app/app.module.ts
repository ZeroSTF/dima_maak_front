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
import { VenturesComponent } from './Ventures/ventures/ventures.component';
import { VentureAddComponent } from './Ventures/venture-add/venture-add.component';
import { AddventureComponent } from './Ventures/addventure/addventure.component';
import { RouterModule } from '@angular/router';
import { UpdateventureComponent } from './Ventures/updateventure/updateventure.component';
import { ProcessexcelComponent } from './Ventures/processexcel/processexcel.component';
import { VenturesfrontComponent } from './Ventures/venturesfront/venturesfront.component';
import { InvestmentformComponent } from './Investments/investmentform/investmentform.component';
import { AllinvestmentsComponent } from './Investments/allinvestments/allinvestments.component';
import { AllreturnsComponent } from './Returns/allreturns/allreturns.component';
import { InvestorsComponent } from './User/investors/investors.component';
import { InvestorsScoresComponent } from './User/investors-scores/investors-scores.component';
import { AddreturnComponent } from './Returns/addreturn/addreturn.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './BackOffice/user-back/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './FrontOffice/profile/profile.component';
import {AuthInterceptor} from "./Service/auth.interceptor";
import { AssetComponent } from './BackOffice/asset/asset.component';
import { LeasingComponent } from './BackOffice/leasing/leasing.component';
import { DemandeComponent } from './BackOffice/demande/demande.component';
import { AssetclientComponent } from './FrontOffice/assetclient/assetclient.component';
import { PaymentComponent } from './FrontOffice/payment/payment.component';
import { ConfirmationComponent } from './BackOffice/confirmation/confirmation.component';
import {AuthGuard} from "./auth.guard";
import { EditProfileComponent } from './FrontOffice/edit-profile/edit-profile.component';
import { InsuranceListComponent } from './BackOffice/Insurance-Back/insurance-list/insurance-list.component';
import { InsurancePackOffersComponent } from './FrontOffice/Insurance-Pack-Front/insurance-pack-offers/insurance-pack-offers.component';
import { AdminInsComponent } from './FrontOffice/admin-ins/admin-ins.component';
import { InsurancepackComponent } from './BackOffice/insurancepack/insurancepack.component';
import { PremiumComponent } from './BackOffice/premium/premium.component';
import { ClaimComponent } from './BackOffice/claim/claim.component';
import { PaypremiumComponent } from './FrontOffice/paypremium/paypremium.component';
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
import { ShowUserComponent } from './BackOffice/user-back/show-user/show-user.component';
import { EditUserComponent } from './BackOffice/user-back/edit-user/edit-user.component';
import { AddUserComponent } from './BackOffice/user-back/add-user/add-user.component';
import { NotificationListComponent } from './BackOffice/notification-back/notification-list/notification-list.component';
import { ShowNotificationComponent } from './BackOffice/notification-back/show-notification/show-notification.component';
import { EditNotificationComponent } from './BackOffice/notification-back/edit-notification/edit-notification.component';
import { AddNotificationComponent } from './BackOffice/notification-back/add-notification/add-notification.component';
import { VerifiedComponent } from './FrontOffice/verified/verified.component';
import { StatsUserComponent } from './BackOffice/user-back/stats-user/stats-user.component';
import {CommonModule} from "@angular/common";
import { LoyaltyListComponent } from './BackOffice/loyalty-back/loyalty-list/loyalty-list.component';
import { AddLoyaltyComponent } from './BackOffice/loyalty-back/add-loyalty/add-loyalty.component';
import { EditLoyaltyComponent } from './BackOffice/loyalty-back/edit-loyalty/edit-loyalty.component';
import { ShowLoyaltyComponent } from './BackOffice/loyalty-back/show-loyalty/show-loyalty.component';

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
    VenturesComponent,
    VentureAddComponent,
    AddventureComponent,
    UpdateventureComponent,
    ProcessexcelComponent,
    VenturesfrontComponent,
    InvestmentformComponent,
    AllinvestmentsComponent,
    AllreturnsComponent,
    InvestorsComponent,
    InvestorsScoresComponent,
    AddreturnComponent
    UserListComponent,
    ProfileComponent,
    InsuranceListComponent,
    InsurancePackOffersComponent,
    AdminInsComponent,
    InsurancepackComponent,
    PremiumComponent,
    ClaimComponent,
    PaypremiumComponent
    AssetComponent,
    LeasingComponent,
    DemandeComponent,
    AssetclientComponent,
    PaymentComponent,
    ConfirmationComponent
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
    ShowUserComponent,
    EditUserComponent,
    AddUserComponent,
    NotificationListComponent,
    ShowNotificationComponent,
    EditNotificationComponent,
    AddNotificationComponent,
    VerifiedComponent,
    StatsUserComponent,
    LoyaltyListComponent,
    AddLoyaltyComponent,
    EditLoyaltyComponent,
    ShowLoyaltyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } , AuthGuard ],
  bootstrap: [AppComponent]

})
export class AppModule { }

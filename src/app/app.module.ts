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
import { AssetComponent } from './BackOffice/asset/asset.component';
import { LeasingComponent } from './BackOffice/leasing/leasing.component';
import { DemandeComponent } from './BackOffice/demande/demande.component';
import { AssetclientComponent } from './FrontOffice/assetclient/assetclient.component';
import { PaymentComponent } from './FrontOffice/payment/payment.component';
import { ConfirmationComponent } from './BackOffice/confirmation/confirmation.component';

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
    AssetComponent,
    LeasingComponent,
    DemandeComponent,
    AssetclientComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

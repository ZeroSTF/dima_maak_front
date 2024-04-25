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
import {HttpClientModule} from "@angular/common/http";
import { VenturesComponent } from './Ventures/ventures/ventures.component';
import { VentureAddComponent } from './Ventures/venture-add/venture-add.component';
import { AddventureComponent } from './Ventures/addventure/addventure.component';
import { AddinvestmentComponent } from './Investments/addinvestment/addinvestment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateventureComponent } from './Ventures/updateventure/updateventure.component';



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
    AddinvestmentComponent,
    UpdateventureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])



  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

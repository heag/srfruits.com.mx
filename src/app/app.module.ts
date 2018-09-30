import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './shell/components/app-shell/app-shell.component';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileInfoComponent } from './shell/components/profile-info/profile-info.component';
import { SocialNetworkComponent } from './shell/components/social-network/social-network.component';
import { OurCompanyComponent } from './forms/about-us/our-company/our-company.component';
import { BenefitsComponent } from './forms/about-us/benefits/benefits.component';
import { ContactComponent } from './forms/contact/contact/contact.component';
import { OfferComponent } from './forms/products/offer/offer.component';
import { FooterComponent } from './shell/components/footer/footer.component'

const materialModules = [MatToolbarModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule ];

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    ProfileInfoComponent,
    SocialNetworkComponent,
    OurCompanyComponent,
    BenefitsComponent,
    ContactComponent,
    OfferComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

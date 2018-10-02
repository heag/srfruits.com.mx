import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AppShellComponent } from './shell/components/app-shell/app-shell.component';
import { MatToolbarModule, MatSelectModule, MatInputModule, MatIconModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule } from '@angular/material';
import {} from '@angular/material/form-field';
import { ProfileInfoComponent } from './shell/components/profile-info/profile-info.component';
import { SocialNetworkComponent } from './shell/components/social-network/social-network.component';
import { ContactComponent } from './forms/contact/contact/contact.component';
import { OfferComponent } from './forms/products/offer/offer.component';
import { FooterComponent } from './shell/components/footer/footer.component';
import { HomeComponent } from './forms/home/home.component';
import { WhyUsComponent } from './forms/about-us/why-us/why-us.component'
import { MisionVisionComponent } from './forms/about-us/mision-vision/mision-vision.component';
import { AchievementsComponent } from './forms/about-us/achievements/achievements.component';
import { BenefitsEmployeeComponent } from './forms/benefits/for-employee/benefits-employee';
import { BenefitsCompanyComponent } from './forms/benefits/for-company/benefits-company';
import { RequestComponent } from './forms/requests/request/request.component';
import { CalculatorComponent } from './forms/requests/calculator/calculator.component';
import { PaymentComponent } from './forms/requests/payment/payment.component';
import { QuestionsComponent } from './forms/contact/questions/questions.component';


const materialModules = [MatToolbarModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatCardModule, MatButtonModule, 
  MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule, MatInputModule ];

const appComponents = [AppComponent, AppShellComponent, ProfileInfoComponent, SocialNetworkComponent, BenefitsCompanyComponent,
  BenefitsEmployeeComponent, MisionVisionComponent, ContactComponent, OfferComponent, FooterComponent, HomeComponent, WhyUsComponent,
  AchievementsComponent, RequestComponent, CalculatorComponent, PaymentComponent, QuestionsComponent];

const routes: Routes =  [
                          {path: '', component: HomeComponent},
                          {path: 'contact', component: ContactComponent},
                          {path: 'porque-nosotros', component: WhyUsComponent},
                          {path: 'mision-vision', component: MisionVisionComponent},
                          {path: 'logros', component: AchievementsComponent},
                          {path: 'beneficios-empleado', component: BenefitsEmployeeComponent},
                          {path: 'beneficios-empresa', component: BenefitsCompanyComponent},
                          {path: 'oferta', component: OfferComponent},
                          {path: 'pedido', component: RequestComponent},
                          {path: 'cotizacion', component: CalculatorComponent},
                          {path: 'pago', component: PaymentComponent},
                          {path: 'contacto', component: ContactComponent},
                          {path: 'preguntas', component: QuestionsComponent},
                          {path: '**', component: HomeComponent} // siempre al final
                        ];

@NgModule({
  declarations: [
    ...appComponents
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    ...materialModules,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

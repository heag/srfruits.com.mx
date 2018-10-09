import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Http, HttpModule } from '@angular/http'
import { EmailRestService } from './services/email.service'

import { environment } from '../environments/environment'
import { ENVIRONMENT } from '../environments/common'

import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AppShellComponent } from './components/shell/components/app-shell/app-shell.component';
import { MatToolbarModule, MatSelectModule, MatInputModule, MatIconModule, MatFormFieldModule, 
  MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, 
  MatButtonToggleModule, MatProgressBarModule, MatSlideToggleModule, MatCheckboxModule, MatDialogModule,
  MatTreeModule, MatExpansionModule, MatGridListModule } from '@angular/material';

import {} from '@angular/material/form-field';
import { ProfileInfoComponent } from './components/shell/components/profile-info/profile-info.component';
import { SocialNetworkComponent } from './components/shell/components/social-network/social-network.component';
import { ContactComponent } from './components/forms/contact/contact/contact.component';
import { OfferComponent } from './components/forms/products/offer/offer.component';
import { FooterComponent } from './components/shell/components/footer/footer.component';
import { HomeComponent } from './components/forms/home/home.component';
import { WhyUsComponent } from './components/forms/about-us/why-us/why-us.component'
import { MisionVisionComponent } from './components/forms/about-us/mision-vision/mision-vision.component';
import { AchievementsComponent } from './components/forms/about-us/achievements/achievements.component';
import { BenefitsEmployeeComponent } from './components/forms/benefits/for-employee/benefits-employee';
import { BenefitsCompanyComponent } from './components/forms/benefits/for-company/benefits-company';
import { RequestComponent } from './components/forms/requests/request/request.component';
import { CalculatorComponent } from './components/forms/requests/calculator/calculator.component';
import { PaymentComponent } from './components/forms/requests/payment/payment.component';
import { QuestionsComponent } from './components/forms/contact/questions/questions.component';
import { CalculatorResultComponent } from './components/forms/requests/calculator/calculator-result/calculator-result.component';
import {  ProcessStepsComponent } from './components/forms/home/process-steps/process-steps.component'

const materialModules = [MatToolbarModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, 
  MatSelectModule, MatIconModule, MatCardModule, MatButtonModule, MatSlideToggleModule,
  MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule, 
  MatInputModule, MatCheckboxModule, MatDialogModule, MatTreeModule, MatExpansionModule, MatGridListModule ];

const angularCoreModules = [BrowserModule, BrowserAnimationsModule, HttpClientModule, HttpModule] 

const appComponents = [AppComponent, AppShellComponent, ProfileInfoComponent, SocialNetworkComponent, BenefitsCompanyComponent,
  BenefitsEmployeeComponent, MisionVisionComponent, ContactComponent, OfferComponent, FooterComponent, HomeComponent, WhyUsComponent,
  AchievementsComponent, RequestComponent, CalculatorComponent, PaymentComponent, QuestionsComponent, CalculatorResultComponent,
  ProcessStepsComponent];

const routes: Routes =  [
                          {path: 'home', component: HomeComponent},
                          {path: 'contact', component: ContactComponent},
                          {path: 'porque-nosotros', component: WhyUsComponent},
                          {path: 'mision-vision', component: MisionVisionComponent},
                          {path: 'logros', component: AchievementsComponent},
                          {path: 'beneficios-empleado', component: BenefitsEmployeeComponent},
                          {path: 'beneficios-empresa', component: BenefitsCompanyComponent},
                          {path: 'oferta', component: OfferComponent},
                          {path: 'pedido', component: RequestComponent},
                          {path: 'calculo', component: CalculatorComponent},
                          {path: 'pago', component: PaymentComponent},
                          {path: 'contacto', component: ContactComponent},
                          {path: 'preguntas', component: QuestionsComponent},
                          {path: 'resultado', component: CalculatorResultComponent},
                          {path: '**', component: HomeComponent} // siempre al final
                        ];

@NgModule({
  declarations: [
    ...appComponents    
  ],
  imports: [...angularCoreModules,
    ...materialModules,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
  providers: [
    {
      provide: EmailRestService,
      useClass: EmailRestService
    },
    {
      provide: ENVIRONMENT,
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

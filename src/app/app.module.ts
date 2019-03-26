import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EmailRestService } from './services/email.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { ENVIRONMENT } from '../environments/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppShellComponent } from './components/shell/components/app-shell/app-shell.component';
import {
  MatToolbarModule, MatSelectModule, MatInputModule, MatIconModule, MatFormFieldModule,
  MatCardModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatButtonToggleModule, MatProgressBarModule, MatSlideToggleModule, MatCheckboxModule, MatDialogModule,
  MatTreeModule, MatExpansionModule, MatGridListModule
} from '@angular/material';

import { ProfileInfoComponent } from './components/shell/components/profile-info/profile-info.component';
import { SocialNetworkComponent } from './components/shell/components/social-network/social-network.component';
import { ContactComponent } from './components/forms/contact/contact/contact.component';
import { OfferComponent } from './components/forms/products/offer/offer.component';
import { FooterComponent } from './components/shell/components/footer/footer.component';
import { HomeComponent } from './components/forms/home/home.component';
import { AdvantagesComponent } from './components/forms/about-us/advantages/advantages.component';
import { MisionVisionComponent } from './components/forms/about-us/mision-vision/mision-vision.component';
import { AchievementsComponent } from './components/forms/about-us/achievements/achievements.component';
import { BenefitsEmployeeComponent } from './components/forms/benefits/for-employee/benefits-employee';
import { BenefitsCompanyComponent } from './components/forms/benefits/for-company/benefits-company';
import { RequestComponent } from './components/forms/requests/request/request.component';
import { CalculatorComponent } from './components/forms/requests/calculator/calculator.component';
import { PaymentComponent } from './components/forms/requests/payment/payment.component';
import { QuestionsComponent } from './components/forms/contact/questions/questions.component';
import { CalculatorResultComponent } from './components/forms/requests/calculator/calculator-result/calculator-result.component';
import { ProcessStepsComponent } from './components/forms/home/process-steps/process-steps.component';
import { ExtraAddInfoComponent } from './components/forms/home/extra-add-info/extra-add-info.component';
import { OurCompanyComponent } from './components/forms/about-us/our-company/our-company.component';
import { TittleHeaderComponent } from './components/shell/components/tittle-header/tittle-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const materialModules = [MatToolbarModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
  MatSelectModule, MatIconModule, MatCardModule, MatButtonModule, MatSlideToggleModule,
  MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule,
  MatInputModule, MatCheckboxModule, MatDialogModule, MatTreeModule, MatExpansionModule, MatGridListModule, FlexLayoutModule];

const angularCoreModules = [BrowserModule, BrowserAnimationsModule, HttpClientModule, HttpModule];

const appComponents = [AppComponent, AppShellComponent, ProfileInfoComponent, SocialNetworkComponent, BenefitsCompanyComponent,
  BenefitsEmployeeComponent, MisionVisionComponent, ContactComponent, OfferComponent, FooterComponent, HomeComponent, AdvantagesComponent,
  AchievementsComponent, RequestComponent, CalculatorComponent, PaymentComponent, QuestionsComponent, CalculatorResultComponent,
  ProcessStepsComponent, ExtraAddInfoComponent, OurCompanyComponent, TittleHeaderComponent];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'porque-nosotros', component: OurCompanyComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'logros', component: AchievementsComponent },
  { path: 'beneficios-empleado', component: BenefitsEmployeeComponent },
  { path: 'beneficios-empresa', component: BenefitsCompanyComponent },
  { path: 'oferta', component: OfferComponent },
  { path: 'pedido', component: RequestComponent },
  { path: 'calculo', component: CalculatorComponent },
  { path: 'pago', component: PaymentComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'preguntas', component: QuestionsComponent },
  { path: 'resultado', component: CalculatorResultComponent },
  { path: '**', component: HomeComponent } // siempre al final
];

@NgModule({
  declarations: [
    ...appComponents,
  ],
  imports: [...angularCoreModules,
    NgbModule,
  ...materialModules,
  RouterModule.forRoot(routes, {useHash: false}),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
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

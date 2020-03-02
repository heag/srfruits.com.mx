import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {EmailRestService} from './services/email.service';

import {environment} from '../environments/environment';
import {ENVIRONMENT} from '../environments/common';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AppShellComponent} from './components/shell/components/app-shell/app-shell.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {SocialNetworkComponent} from './components/shell/components/social-network/social-network.component';
import {ContactComponent} from './components/forms/contact/contact/contact.component';
import {OfferComponent} from './components/forms/products/offer/offer.component';
import {FooterComponent} from './components/shell/components/footer/footer.component';
import {HomeComponent} from './components/forms/home/home.component';
import {AdvantagesComponent} from './components/forms/about-us/advantages/advantages.component';
import {MisionVisionComponent} from './components/forms/about-us/mision-vision/mision-vision.component';
import {AchievementsComponent} from './components/forms/about-us/achievements/achievements.component';
import {BenefitsEmployeeComponent} from './components/forms/benefits/for-employee/benefits-employee';
import {BenefitsCompanyComponent} from './components/forms/benefits/for-company/benefits-company';
import {RequestComponent} from './components/forms/requests/request/request.component';
import {CalculatorComponent} from './components/forms/requests/calculator/calculator.component';
import {PaymentComponent} from './components/forms/requests/payment/payment.component';
import {QuestionsComponent} from './components/forms/contact/questions/questions.component';
import {ProcessStepsComponent} from './components/forms/home/process-steps/process-steps.component';
import {TittleHeaderComponent} from './components/shell/components/tittle-header/tittle-header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductsComponent} from './components/forms/products/products.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {FlatNavigationComponent} from './components/shell/components/flat-navigation/flat-navigation.component';
import {LanguageSwitcherComponent} from './components/shell/components/language-switcher/language-switcher.component';
import {PhoneSliderComponent} from './components/forms/products/offer/phone-slider/phone-slider.component';
import {PreguntasComponent} from './components/forms/home/preguntas/preguntas.component';
import {CallUsComponent} from './components/shell/components/call-us/call-us.component';

const materialModules = [MatToolbarModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
  MatSelectModule, MatIconModule, MatCardModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule,
  MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonToggleModule, MatProgressBarModule,
  MatInputModule, MatCheckboxModule, MatDialogModule, MatTreeModule, MatExpansionModule, MatGridListModule, FlexLayoutModule];

const angularCoreModules = [BrowserModule, BrowserAnimationsModule, HttpClientModule, HttpModule];

const appComponents = [AppComponent, AppShellComponent, SocialNetworkComponent, BenefitsCompanyComponent,
  BenefitsEmployeeComponent, MisionVisionComponent, ContactComponent, OfferComponent, FooterComponent, HomeComponent, AdvantagesComponent,
  AchievementsComponent, RequestComponent, CalculatorComponent, PaymentComponent, QuestionsComponent, ProcessStepsComponent,
  TittleHeaderComponent, ProductsComponent];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'logros', component: AchievementsComponent },
  { path: 'beneficios-empleado', component: BenefitsEmployeeComponent },
  { path: 'beneficios-empresa', component: BenefitsCompanyComponent },
  { path: 'oferta', component: ProductsComponent },
  { path: 'pedido', component: RequestComponent },
  { path: 'calculo', component: CalculatorComponent },
  { path: 'pago', component: PaymentComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'preguntas', component: QuestionsComponent },
  { path: '**', component: HomeComponent } // siempre al final
];

@NgModule({
  declarations: [
    ...appComponents,
    FlatNavigationComponent,
    LanguageSwitcherComponent,
    PhoneSliderComponent,
    PreguntasComponent,
    CallUsComponent,
  ],
    imports: [...angularCoreModules,
        ...materialModules,
        RouterModule.forRoot(routes, {useHash: false}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }), MatSidenavModule, MatListModule, MatCarouselModule.forRoot(),
    ],
  exports: [
  ],
  entryComponents: [OfferComponent],
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

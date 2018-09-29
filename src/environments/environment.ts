// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {
  IConfiguration, IEnvironment, IApiConfiguration, IAuthConfiguration, IWebConfiguration, IReUseConfiguration, IDropOffConfiguration,
  IPickUpConfiguration, IDropOffServiceConfiguration, IPickUpServiceConfiguration, ICreditsConfiguration, IPortalConfiguration, IGoogleAnalyticsConfiguration,
  ILoggingConfiguration, IFeatureSwitch, ICertiWeightConfiguration, IApplicationInsightsConfiguration, IMapsConfigurations, IHotJarConfiguration, IFacebookPixelConfiguration, EnvironmentType,
  IPhraseAppConfiguration, ISupportConfiguration
} from './common';

let config: IConfiguration = {
api: {
  reuseRequestsUrl: 'http://localhost:4300/reuse/requests/community',
  reuseRequestsCancelUrl: 'http://localhost:4300/reuse/requests/community/cancel',
  reuseRequestForApprovalUrl: 'http://localhost:4300/reuse/requests/community/approve/ask',
  reuseShippingLinesUrl: 'http://localhost:4300/reuse/shipping-lines',
  depotChangeShippingLinesWithLocationsUrl: 'http://localhost:4300/depot-change/shipping-lines/locations',
  reuseExportUrl: 'http://localhost:4300/reuse/requests/community/export',
  reuseTermsAndConditionsUrl : 'http://localhost:4300/reuse/terms-and-conditions',
  depotChangeTermsAndConditionsUrl: 'http://localhost:4300/depot-change/terms-and-conditions',
  dropOffRequestsUrl: 'http://localhost:4300/depot-change/requests/community/drop-off',
  pickUpRequestsUrl: 'http://localhost:4300/depot-change/requests/community/pick-up',
  depotChangeShippingLinesUrl: 'http://localhost:4300/depot-change/shipping-lines',
  depotChangeOriginalDepotsUrl: 'http://localhost:4300/depot-change/depots/original',
  depotChangeDesiredDepotsUrl: 'http://localhost:4300/depot-change/depots/desired',
  depotChangeCustomerPriceListsUrl: 'http://localhost:4300/depot-change/customer-price-lists',
  depotChangeRequestsCancelUrl : 'http://localhost:4300/depot-change/requests/community/cancel',
  dropOffServicesRequestsUrl: 'http://localhost:4300/additional-depot-service/requests/community/drop-off',
  dropOffServicesUrl: 'http://localhost:4300/additional-depot-service/services',
  additionalServicesWithDetailsUrl: 'http://localhost:4300/additional-depot-service/services/details',
  additionalDepotServicesTermsAndConditionsUrl: 'http://localhost:4300/additional-depot-service/terms-and-conditions',
  pickUpServicesRequestsUrl: 'http://localhost:4300/additional-depot-service/requests/community/pick-up',
  announcementsUrl: 'http://localhost:4300/announcements/get',
  additionalDepotServicesUrl: 'http://localhost:4300/additional-depot-service/services',
  additionalDepotServiceRequestsCancelUrl: 'http://localhost:4300/additional-depot-service/requests/community/cancel',
  liveRequestsNotificationsUrl: 'http://localhost:4350/community/live-announcements'
} as IApiConfiguration,

web: {
  reuse: {
    detailsUrl: 'http://localhost:3000/reuse/detail',
    requestUrl: 'http://localhost:3000/reuse/requestreuse'
  } as IReUseConfiguration,
  dropOff: {
    detailsUrl: 'http://localhost:4000/request/dropoffchange',
    requestUrl: 'http://localhost:4000/request/dropoffchange'
  } as IDropOffConfiguration,
  pickUp: {
    detailsUrl: 'http://localhost:4000/request/pickupchange',
    requestUrl: 'http://localhost:4000/request/pickupchange'
  } as IPickUpConfiguration,
  dropOffService: {
    detailsUrl: 'http://localhost:5500/request/dropoffservice',
    requestUrl: 'http://localhost:5500/request/dropoffservice',
    isSWTARequest: true // TODO move to FS configuration and rename - ~swtaEnabled
  } as IDropOffServiceConfiguration,
  pickUpService: {
    detailsUrl: 'http://localhost:5500/request/pickupservice',
    requestUrl: 'http://localhost:5500/request/pickupservice',
    isSWTARequest: true
  } as IPickUpServiceConfiguration,
  credits: {
    buyCreditsUrl: 'http://localhost:26090/Credit/Buy',
    hubUrl: 'http://localhost:8002/signalr',
    transactionsUrl: 'http://localhost:26090/Credit/Transactions'
  } as ICreditsConfiguration,
  portal: {
    companyManagementUrl: 'http://localhost:2000/CompanyManagement/',
    homeUrl: 'http://localhost:2000',
    profileUrl: 'http://localhost:2000/profile'
  } as IPortalConfiguration,
  certiWeight:{
    certificatesUrl: 'http://localhost:5000/app/certificates',
    searchUrl: 'http://localhost:5000/app/search'
  } as ICertiWeightConfiguration,  
} as IWebConfiguration,
auth: {
  tokenEndpointUrl: 'http://localhost:2000/auth/token',
  loginUrl: 'http://localhost:2000/account/login',
  logoutUrl: 'http://localhost:2000/?wa=wsignout1.0'
} as IAuthConfiguration,
logging: {
  googleAnalytics: {
    key: ''
  } as IGoogleAnalyticsConfiguration,
  applicationInsights: {
    instrumentationKey: ''
  } as IApplicationInsightsConfiguration,
  hotJar: {
    key: '663262'
  } as IHotJarConfiguration,
  facebookPixel: {
    key: '206423346541776'
  } as IFacebookPixelConfiguration
} as ILoggingConfiguration,
maps: {
  url: 'http://maps.googleapis.com/maps/api/js?key=',
  key: 'AIzaSyDb2A1q3T3h0sltpu3cms8I_NckJeKLSAM',
  fusionTableKey: '1G29TRgBP4SHgnis7PMrwNnZKaxZJKocRMdMeWtKe'
} as IMapsConfigurations,
phrase: {
  projectId: '0ddb744cf640237878b0cbc6fe8bfe2d'
} as IPhraseAppConfiguration,
support: {
  termsAndConditionsUrl: 'https://www.avantida.com/terms-service/',
  privacyPolicyUrl: 'https://www.avantida.com/privacy-policy/',
  helpAndSupportUrl: 'https://support.avantida.com/'
} as ISupportConfiguration,
featureSwitch: {
  enableForUsers: true,
  hotJarEnabled: false,
  facebookPixelEnabled: false,
  onboardingGuideEnabled: true,
  phraseAppEnabled: false,
  reuseLiveNotificationEnabled:true
} as IFeatureSwitch,  
type: EnvironmentType.LOCAL
};

var configPromise = new Promise<{ config: IConfiguration }>((resolve, reject) => {
  resolve({ config });
})

export const environment: IEnvironment = {
  production: false,
  init: configPromise,
  configuration: config
};

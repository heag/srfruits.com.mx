import {
    IApiConfiguration, IAuthConfiguration, IConfiguration, IWebConfiguration, IReUseConfiguration, IDropOffConfiguration,
    IPickUpConfiguration, IDropOffServiceConfiguration, IPickUpServiceConfiguration, ICreditsConfiguration, IPortalConfiguration,
    IGoogleAnalyticsConfiguration, ILoggingConfiguration, IFeatureSwitch, ICertiWeightConfiguration, IApplicationInsightsConfiguration, IMapsConfigurations, IHotJarConfiguration, IFacebookPixelConfiguration, EnvironmentType, ISupportConfiguration
} from '../common';

export const config: IConfiguration = {
  api: {
    reuseRequestsUrl: 'https://app-webapi-test.avantida.com/reuse/requests/community',
    reuseRequestsCancelUrl: 'https://app-webapi-test.avantida.com/reuse/requests/community/cancel',
    reuseRequestForApprovalUrl: 'https://app-webapi-test.avantida.com/reuse/requests/community/approve/ask',
    reuseShippingLinesUrl: 'https://app-webapi-test.avantida.com/reuse/shipping-lines',
    depotChangeShippingLinesWithLocationsUrl: 'https://app-webapi-test.avantida.com/depot-change/shipping-lines/locations',
    reuseExportUrl: 'https://app-webapi-test.avantida.com/reuse/requests/community/export',
    reuseTermsAndConditionsUrl : 'https://app-webapi-test.avantida.com/reuse/terms-and-conditions',
    depotChangeTermsAndConditionsUrl: 'https://app-webapi-test.avantida.com/depot-change/terms-and-conditions',
    dropOffRequestsUrl: 'https://app-webapi-test.avantida.com/depot-change/requests/community/drop-off',
    pickUpRequestsUrl: 'https://app-webapi-test.avantida.com/depot-change/requests/community/pick-up',
    depotChangeShippingLinesUrl: 'https://app-webapi-test.avantida.com/depot-change/shipping-lines',
    depotChangeOriginalDepotsUrl: 'https://app-webapi-test.avantida.com/depot-change/depots/original',
    depotChangeDesiredDepotsUrl: 'https://app-webapi-test.avantida.com/depot-change/depots/desired',
    depotChangeCustomerPriceListsUrl: 'https://app-webapi-test.avantida.com/depot-change/customer-price-lists',
    depotChangeRequestsCancelUrl: 'https://app-webapi-test.avantida.com/depot-change/requests/community/cancel',
    dropOffServicesRequestsUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/requests/community/drop-off',
    dropOffServicesUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/services',
    additionalServicesWithDetailsUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/services/details',
    additionalDepotServicesTermsAndConditionsUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/terms-and-conditions',
    pickUpServicesRequestsUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/requests/community/pick-up',
    announcementsUrl: 'https://app-webapi-test.avantida.com/announcements/get',
    additionalDepotServicesUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/services',
    additionalDepotServiceRequestsCancelUrl: 'https://app-webapi-test.avantida.com/additional-depot-service/requests/community/cancel',
    liveRequestsNotificationsUrl: 'https://app-webapi-live-announcements-test.avantida.com/community/live-announcements'
  } as IApiConfiguration,
  web: {
    reuse: {
      detailsUrl: 'https://reuse-test.avantida.com/reuse/detail',
      requestUrl: 'https://reuse-test.avantida.com/reuse/requestreuse'
    } as IReUseConfiguration,
    dropOff: {
      detailsUrl: 'https://depotx-test.avantida.com/request/dropoffchange',
      requestUrl: 'https://depotx-test.avantida.com/request/dropoffchange'
    } as IDropOffConfiguration,
    pickUp: {
      detailsUrl: 'https://depotx-test.avantida.com/request/pickupchange',
      requestUrl: 'https://depotx-test.avantida.com/request/pickupchange'
    } as IPickUpConfiguration,
    dropOffService: {
      detailsUrl: 'https://flexgate-test.avantida.com/request/dropoffservice',
      requestUrl: 'https://flexgate-test.avantida.com/request/dropoffservice',
      isSWTARequest: false
    } as IDropOffServiceConfiguration,
    pickUpService: {
      detailsUrl: 'https://flexgate-test.avantida.com/request/pickupservice',
      requestUrl: 'https://flexgate-test.avantida.com/request/pickupservice',
      isSWTARequest: false
    } as IPickUpServiceConfiguration,
    credits: {
      buyCreditsUrl: 'https://credits-test.avantida.com/Credit/Buy',
      hubUrl: 'https://credits-service-test.avantida.com/signalr',
      transactionsUrl: 'https://credits-test.avantida.com/Credit/Transactions'
    } as ICreditsConfiguration,
    portal: {
      companyManagementUrl: 'https://portal-test.avantida.com/CompanyManagement/',
      homeUrl: 'https://portal-test.avantida.com',
      profileUrl: 'https://portal-test.avantida.com/profile'
    } as IPortalConfiguration,
    certiWeight:{
      certificatesUrl: 'https://certiweight-test.avantida.com/app/certificates',
      searchUrl: 'https://certiweight-test.avantida.com/app/search'
    } as ICertiWeightConfiguration, 
  } as IWebConfiguration,
  auth: {
    tokenEndpointUrl: 'https://portal-test.avantida.com/auth/token',
    loginUrl: 'https://portal-test.avantida.com/account/login',
    logoutUrl: 'https://portal-test.avantida.com/?wa=wsignout1.0'
  } as IAuthConfiguration,
  logging: {
    googleAnalytics: {
      key: ''
    } as IGoogleAnalyticsConfiguration,
    applicationInsights: {
        instrumentationKey: '4156b2e3-802c-4037-b5f5-632a007d3340'
    } as IApplicationInsightsConfiguration,
    hotJar: {
      key: '663262'
    } as IHotJarConfiguration,
    facebookPixel: {
      key: '206423346541776'
    } as IFacebookPixelConfiguration
  } as ILoggingConfiguration,
  maps: {
    url: 'https://maps.googleapis.com/maps/api/js?key=',
    key: 'AIzaSyDb2A1q3T3h0sltpu3cms8I_NckJeKLSAM',
    fusionTableKey: '1G29TRgBP4SHgnis7PMrwNnZKaxZJKocRMdMeWtKe'
  } as IMapsConfigurations,
  phrase: {
    projectId: '0ddb744cf640237878b0cbc6fe8bfe2d'
  },
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
  type: EnvironmentType.TEST
}
import {
    IApiConfiguration, IAuthConfiguration, IConfiguration, IWebConfiguration, IReUseConfiguration, IDropOffConfiguration,
    IPickUpConfiguration, IDropOffServiceConfiguration, IPickUpServiceConfiguration, ICreditsConfiguration, IPortalConfiguration,
    IGoogleAnalyticsConfiguration, ILoggingConfiguration, IFeatureSwitch, ICertiWeightConfiguration, IApplicationInsightsConfiguration, IMapsConfigurations, IHotJarConfiguration, IFacebookPixelConfiguration, EnvironmentType, ISupportConfiguration
} from '../common';

export const config: IConfiguration = {
  api: {
    reuseRequestsUrl: 'https://app-webapi.avantida.com/reuse/requests/community',
    reuseRequestsCancelUrl: 'https://app-webapi.avantida.com/reuse/requests/community/cancel',
    reuseRequestForApprovalUrl: 'https://app-webapi.avantida.com/reuse/requests/community/approve/ask',
    reuseShippingLinesUrl: 'https://app-webapi.avantida.com/reuse/shipping-lines',
    depotChangeShippingLinesWithLocationsUrl: 'https://app-webapi.avantida.com/depot-change/shipping-lines/locations',
    reuseExportUrl: 'https://app-webapi.avantida.com/reuse/requests/community/export',
    reuseTermsAndConditionsUrl : 'https://app-webapi.avantida.com/reuse/terms-and-conditions',
    depotChangeTermsAndConditionsUrl: 'https://app-webapi.avantida.com/depot-change/terms-and-conditions',
    dropOffRequestsUrl: 'https://app-webapi.avantida.com/depot-change/requests/community/drop-off',
    pickUpRequestsUrl: 'https://app-webapi.avantida.com/depot-change/requests/community/pick-up',
    depotChangeShippingLinesUrl: 'https://app-webapi.avantida.com/depot-change/shipping-lines',
    depotChangeOriginalDepotsUrl: 'https://app-webapi.avantida.com/depot-change/depots/original',
    depotChangeDesiredDepotsUrl: 'https://app-webapi.avantida.com/depot-change/depots/desired',
    depotChangeCustomerPriceListsUrl: 'https://app-webapi.avantida.com/depot-change/customer-price-lists',
    depotChangeRequestsCancelUrl: 'https://app-webapi.avantida.com/depot-change/requests/community/cancel',
    dropOffServicesRequestsUrl: 'https://app-webapi.avantida.com/additional-depot-service/requests/community/drop-off',
    dropOffServicesUrl: 'https://app-webapi.avantida.com/additional-depot-service/services',
    additionalServicesWithDetailsUrl: 'https://app-webapi.avantida.com/additional-depot-service/services/details',
    additionalDepotServicesTermsAndConditionsUrl: 'https://app-webapi.avantida.com/additional-depot-service/terms-and-conditions',
    pickUpServicesRequestsUrl: 'https://app-webapi.avantida.com/additional-depot-service/requests/community/pick-up',
    announcementsUrl: 'https://app-webapi.avantida.com/announcements/get',
    additionalDepotServicesUrl: 'https://app-webapi.avantida.com/additional-depot-service/services',
    additionalDepotServiceRequestsCancelUrl: 'https://app-webapi.avantida.com/additional-depot-service/requests/community/cancel',
    liveRequestsNotificationsUrl: 'https://app-webapi-live-announcements.avantida.com/community/live-announcements'
  } as IApiConfiguration,
  web: {
    reuse: {
      detailsUrl: 'https://reuse.avantida.com/reuse/detail',
      requestUrl: 'https://reuse.avantida.com/reuse/requestreuse'
    } as IReUseConfiguration,
    dropOff: {
      detailsUrl: 'https://depotx.avantida.com/request/dropoffchange',
      requestUrl: 'https://depotx.avantida.com/request/dropoffchange'
    } as IDropOffConfiguration,
    pickUp: {
      detailsUrl: 'https://depotx.avantida.com/request/pickupchange',
      requestUrl: 'https://depotx.avantida.com/request/pickupchange'
    } as IPickUpConfiguration,
    dropOffService: {
      detailsUrl: 'https://flexgate.avantida.com/request/dropoffservice',
      requestUrl: 'https://flexgate.avantida.com/request/dropoffservice',
      isSWTARequest: false
    } as IDropOffServiceConfiguration,
    pickUpService: {
      detailsUrl: 'https://flexgate.avantida.com/request/pickupservice',
      requestUrl: 'https://flexgate.avantida.com/request/pickupservice',
      isSWTARequest: false
    } as IPickUpServiceConfiguration,
    credits: {
      buyCreditsUrl: 'https://credits.avantida.com/Credit/Buy',
      hubUrl: 'https://credits-service.avantida.com/signalr',
      transactionsUrl: 'https://credits.avantida.com/Credit/Transactions'
    } as ICreditsConfiguration,
    portal: {
      companyManagementUrl: 'https://portal.avantida.com/CompanyManagement/',
      homeUrl: 'https://portal.avantida.com',
      profileUrl: 'https://portal.avantida.com/profile'
    } as IPortalConfiguration,
    certiWeight:{
      certificatesUrl: 'https://certiweight.avantida.com/app/certificates',
      searchUrl: 'https://certiweight.avantida.com/app/search'
    } as ICertiWeightConfiguration, 
  } as IWebConfiguration,
  auth: {
    tokenEndpointUrl: 'https://portal.avantida.com/auth/token',
    loginUrl: 'https://portal.avantida.com/account/login',
    logoutUrl: 'https://portal.avantida.com/?wa=wsignout1.0'
  } as IAuthConfiguration,
  logging: {
    googleAnalytics: {
      key: 'UA-103512382-1'
    } as IGoogleAnalyticsConfiguration,
    applicationInsights: {
        instrumentationKey: 'da4ae34b-cceb-483b-a819-c9306e71508d'
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
    key: 'AIzaSyBg5BhgdMEUrnJH95BjevKJphAcyGdjLtQ',
    fusionTableKey: '1G29TRgBP4SHgnis7PMrwNnZKaxZJKocRMdMeWtKe'
  } as IMapsConfigurations,
  phrase: {
    projectId: ''
  },
  support: {
    termsAndConditionsUrl: 'https://www.avantida.com/terms-service/',
    privacyPolicyUrl: 'https://www.avantida.com/privacy-policy/',
    helpAndSupportUrl: 'https://support.avantida.com/'
  } as ISupportConfiguration,
  featureSwitch: {
    enableForUsers: true,
    hotJarEnabled: true,
    facebookPixelEnabled: true,
    onboardingGuideEnabled: true,
    phraseAppEnabled: false,
    reuseLiveNotificationEnabled:true
  } as IFeatureSwitch,
  type: EnvironmentType.PRODUCTION
}
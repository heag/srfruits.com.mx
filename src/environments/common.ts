export enum EnvironmentType {
    LOCAL,
    TEST,
    STAGING,
    PRODUCTION
}

export interface IEnvironment {
    production: boolean;
    init: Promise<{ config: IConfiguration }>;
    configuration: IConfiguration;
}

export interface IConfiguration {
    api: IApiConfiguration;
    web: IWebConfiguration;
    auth: IAuthConfiguration;
    logging: ILoggingConfiguration;
    maps: IMapsConfigurations;
    phrase: IPhraseAppConfiguration;
    featureSwitch: IFeatureSwitch;
    support: ISupportConfiguration;
    type: EnvironmentType;
}

export interface IApiConfiguration {
    reuseRequestsUrl: string;
    reuseRequestsCancelUrl: string;
    reuseRequestForApprovalUrl: string;
    reuseShippingLinesUrl: string;
    depotChangeShippingLinesWithLocationsUrl:string,
    reuseExportUrl: string;
    reuseTermsAndConditionsUrl: string;
    depotChangeTermsAndConditionsUrl: string;
    additionalDepotServicesUrl: string;

    pickUpRequestsUrl: string;
    pickUpRequestsListUrl: string; //TODO: remove after renaming endpoint
    pickUpServicesRequestsUrl: string;
    
    depotChangeShippingLinesUrl: string;
    depotChangeOriginalDepotsUrl: string;
    depotChangeDesiredDepotsUrl: string;
    depotChangeCustomerPriceListsUrl: string;
    depotChangeRequestsCancelUrl : string;

    additionalDepotServiceRequestsCancelUrl: string;
    
    dropOffRequestsUrl: string;
    dropOffServicesRequestsUrl: string;
    dropOffServicesUrl: string;
    additionalServicesWithDetailsUrl: string;
    additionalDepotServicesTermsAndConditionsUrl: string;
    
    announcementsUrl: string;
    liveRequestsNotificationsUrl: string;
}

export interface ILoggingConfiguration {
    googleAnalytics: IGoogleAnalyticsConfiguration;
    applicationInsights: IApplicationInsightsConfiguration;
    hotJar: IHotJarConfiguration;
    facebookPixel: IFacebookPixelConfiguration;
}

export interface IApplicationInsightsConfiguration {
    instrumentationKey: string;
}

export interface IGoogleAnalyticsConfiguration {
    key: string;
}

export interface IHotJarConfiguration{
    key: string;
}

export interface IFacebookPixelConfiguration{
    key: string;
}

export interface IWebConfiguration {
    reuse: IReUseConfiguration;
    dropOff: IDropOffConfiguration;
    pickUp: IPickUpConfiguration;
    dropOffService: IDropOffServiceConfiguration;
    pickUpService: IPickUpServiceConfiguration;
    credits: ICreditsConfiguration;
    portal: IPortalConfiguration;
    certiWeight: ICertiWeightConfiguration;
}

export interface IWebAppConfiguration {
    detailsUrl: string;
    requestUrl: string;
}

export interface ICreditsConfiguration {
    buyCreditsUrl: string;
    hubUrl: string;
    transactionsUrl: string;
}

export interface IPortalConfiguration {
    homeUrl: string;
    companyManagementUrl: string;
    profileUrl: string;
}

export interface ICertiWeightConfiguration {
    searchUrl: string;
    certificatesUrl: string;
}

export interface IReUseConfiguration extends IWebAppConfiguration {   
}

export interface IDropOffConfiguration extends IWebAppConfiguration {
}

export interface IPickUpConfiguration extends IWebAppConfiguration {
}

export interface IDropOffServiceConfiguration extends IWebAppConfiguration {
    isSWTARequest: boolean;
}

export interface IPickUpServiceConfiguration extends IWebAppConfiguration {
    isSWTARequest: boolean;
}

export interface IAuthConfiguration {
    tokenEndpointUrl: string;
    loginUrl: string;
    logoutUrl: string;
}

export interface ISupportConfiguration {
    helpAndSupportUrl: string;
    termsAndConditionsUrl: string;
    privacyPolicyUrl: string;
}

export interface IMapsConfigurations{
    url: string;
    key: string;
    fusionTableKey: string;
}

export interface IFeatureSwitch {
    enableForUsers: boolean;
    hotJarEnabled: boolean;
    facebookPixelEnabled: boolean;
    onboardingGuideEnabled: boolean;
    reuseLiveNotificationEnabled:boolean;
    phraseAppEnabled: boolean;
}

export interface IPhraseAppConfiguration {
    projectId: string;
}
export const ENVIRONMENT: string = 'environment';

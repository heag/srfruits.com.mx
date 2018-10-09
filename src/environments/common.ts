export enum EnvironmentType {
    LOCAL,
    TEST,
    STAGING,
    PRODUCTION
}

export interface IEnvironment {
    production: boolean;
    init: Promise<{ config: IConfiguration }>
    configuration: IConfiguration;
}

export interface IConfiguration {
    api: IApiConfiguration;
    type: EnvironmentType;
}

export interface IApiConfiguration {
    emailSenderUrl: string;
}

export const ENVIRONMENT: string = 'environment';

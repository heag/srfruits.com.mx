import {
    IApiConfiguration, EnvironmentType, IConfiguration, IEnvironment } from '../common';

export const config: IConfiguration = {
  api: {
    emailSenderUrl: 'https://fruit-webapi-prod.azurewebsites.net/email/send',
  } as IApiConfiguration,
  type: EnvironmentType.PRODUCTION
}

const env: IEnvironment = {
  production: true,
  init: null,
  configuration: {} as IConfiguration,
}
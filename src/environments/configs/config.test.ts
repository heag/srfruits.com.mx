import {
  IApiConfiguration, EnvironmentType, IConfiguration } from '../common';

export const config: IConfiguration = {
api: {
  emailSenderUrl: 'http://fruit-webapi-prod.frutas.com/email/send', //change
} as IApiConfiguration,
type: EnvironmentType.TEST
}
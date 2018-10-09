import {
  IApiConfiguration, EnvironmentType, IConfiguration, IEnvironment } from './common';

export const config: IConfiguration = {
api: {
  emailSenderUrl: 'https://localhost:44372/email/send',
} as IApiConfiguration,
type: EnvironmentType.LOCAL
}

const configPromise = new Promise<{ config: IConfiguration }>((resolve, reject) => {
  resolve({ config })
})

export const environment: IEnvironment = {
  production: false,
  init: configPromise,
  configuration: config,
}
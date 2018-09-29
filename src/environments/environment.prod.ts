import { IConfiguration, IEnvironment } from './common';

declare var System: any;

const currentHostname: string = window.location.hostname.replace('.avantida.com', '');
const testCheck =  (str: string) => str.endsWith('-test');
const stagingCheck = (str: string) => str.endsWith('-staging');

const env: IEnvironment = {
  production: true,
  init: null,
  configuration: {} as IConfiguration
};

const initFactory = (envName: string) => System.import(`./configs/config.${envName}`).then((res: { config: IConfiguration }) => {
    env.configuration = res.config;
    return res.config;
});

if(testCheck(currentHostname)){
  env.init = initFactory('test');
}
else if(stagingCheck(currentHostname)){
  env.init = initFactory('staging');
}
else{
  env.init = initFactory('production');
}

export let environment: IEnvironment = env;

import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => {
  const { NODE_ENV, APP_PORT, APP_NAME, APP_KEY, APP_SECRET } = process.env;
  const appPort = parseInt(APP_PORT, 10) || 3001;

  return {
    isDev: NODE_ENV !== 'production',
    appPort,
    appName: APP_NAME || 'next-nest-mono',
    appKey: APP_KEY,
    appSecret: APP_SECRET,
  };
});

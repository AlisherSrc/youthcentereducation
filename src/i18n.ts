import {getRequestConfig} from 'next-intl/server';

// defines which translation we want to load by given locale
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
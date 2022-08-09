import {
    DictionaryService,
    RestDictionaryService,
    GraphQLDictionaryService,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

export class DictionaryServiceFactory {
    create(): DictionaryService {
        return process.env.FETCH_WITH === 'GraphQL'
            ? new GraphQLDictionaryService({
                  endpoint: config.graphQLEndpoint,
                  apiKey: config.sitecoreApiKey,
                  siteName: config.jssAppName,
                  /*
            The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current
            app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
            otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
            rootItemId: '{GUID}'
          */
                  rootItemId: '{4522E524-8D52-4801-B2C7-995A98C424FC}',
              })
            : new RestDictionaryService({
                  apiHost: config.sitecoreApiHost,
                  apiKey: config.sitecoreApiKey,
                  siteName: config.jssAppName,
              });
    }
}

export const dictionaryServiceFactory = new DictionaryServiceFactory();

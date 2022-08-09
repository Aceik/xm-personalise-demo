import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';

import 'assets/app.css';
// import 'assets/bootstrap-3.3.7/css/bootstrap.min.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
    // Note Next.js does not (currently) provide anything for translation, only i18n routing.
    // If your app is not multilingual, next-localization and references to it can be removed.
    <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
      <Component {...rest} />
    </I18nProvider>
  );
}

export default App;

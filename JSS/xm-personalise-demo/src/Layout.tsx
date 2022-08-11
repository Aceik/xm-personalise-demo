import React from 'react';
import Head from 'next/head';
import { Placeholder, getPublicUrl, LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import Script from 'next/script';
import { PushViewEvent } from 'lib/sitecore-cdp/sitecore-cdp';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
    layoutData: LayoutServiceData;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
    const { route } = layoutData.sitecore;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <title>Rio Hotel</title>

                <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
                <link rel="icon" href={`${publicUrl}/favicon.ico`} />

                {/* CSS  */}
                <link
                    rel="stylesheet"
                    href={`${publicUrl}/bootstrap-3.3.7/css/bootstrap.min.css`}
                />
                <link rel="stylesheet" href={`${publicUrl}/css/custom.css`} />
                <link rel="stylesheet" href={`${publicUrl}/css/owl.carousel.css`} />
                <link rel="stylesheet" href={`${publicUrl}/css/owl.theme.default.min.css`} />
                <link rel="stylesheet" href={`${publicUrl}/css/owl.theme.default.css`} />
                <link rel="stylesheet" href={`${publicUrl}/css/style.css`} />
                <link rel="stylesheet" href={`${publicUrl}/css/font-awesome.min.css`} />
                <link rel="stylesheet" href={`${publicUrl}/magnific-popup/magnific-popup.css`} />
                {/* <link rel="stylesheet" href={`${publicUrl}/vegas/vegas.min.css`} /> */}

                {/* google fonts */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,600"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Domine:400,700"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `                    
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NQKPNBN');`,
                    }}
                ></script>
                {/* End Google Tag Manager */}

                {/* Define Global Boxever/CDP Settings */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function () {
                            var _boxeverq = _boxeverq || [];
                            window._boxever_settings = {                            
                                client_key: "${process.env.SITECORE_BOXEVER_CLIENTKEY}",
                                target: "https://api-ap-southeast-2-production.boxever.com/v1.2",                            
                                cookie_domain: "${process.env.SITECORE_BOXEVER_COOKIE_DOMAIN}",
                                javascriptLibraryVersion: '1.4.9',
                                pointOfSale: "Luxury Hotel",
                                //web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net"
                            }                                              
                        })();`,
                    }}
                ></script>

                {/* load boxever.js */}
                <script
                    type="text/javascript"
                    async={true}
                    src="https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js"
                ></script>
            </Head>

            {PushViewEvent({
                channel: 'WEB',
                type: 'VIEW',
                currency: 'AUD',
                language: 'EN',
                page: '/',
                pos: 'Luxury Hotel',
            })}

            {/* root placeholders for the app, which we add components to using route data */}
            <div>
                <div>{route && <Placeholder name="jss-header" rendering={route} />}</div>
                <div>{route && <Placeholder name="jss-main" rendering={route} />}</div>

                <a href="javascript:" id="return-to-top">
                    <i className="fa fa-arrow-up"></i>
                </a>
                <div>{route && <Placeholder name="jss-footer" rendering={route} />}</div>

                <Script src={`${publicUrl}/js/jquery-2.1.1.js`} strategy={'beforeInteractive'} />
                <Script
                    src={`${publicUrl}/bootstrap-3.3.7/js/bootstrap.min.js`}
                    strategy={'afterInteractive'}
                />
                <Script src={`${publicUrl}/js/owl.carousel.js`} strategy={'afterInteractive'} />
                <Script src={`${publicUrl}/js/owl.carousel.min.js`} strategy={'afterInteractive'} />
                <Script src={`${publicUrl}/js/style.js`} strategy={'afterInteractive'} />
                <Script src={`${publicUrl}/js/validator.min.js`} strategy={'afterInteractive'} />
                <Script
                    src={`${publicUrl}/magnific-popup/jquery.magnific-popup.js`}
                    strategy={'afterInteractive'}
                />
                <Script
                    src={`${publicUrl}/magnific-popup/jquery.magnific-popup.min.js`}
                    strategy={'afterInteractive'}
                />
                <Script
                    src={`${publicUrl}/magnific-popup/swiper-magnific-popup.js`}
                    strategy={'afterInteractive'}
                />
                {/* <Script src={`${publicUrl}/vegas/vegas.min.js`} /> */}
                <Script src={`${publicUrl}/js/custom.js`} />
            </div>
        </>
    );
};

export default Layout;

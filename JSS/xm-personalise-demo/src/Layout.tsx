import React from 'react';
import Head from 'next/head';
import {
    Placeholder,
    VisitorIdentification,
    getPublicUrl,
    LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Script from 'next/script';

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
                {/* Google Tag Manager */}

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function () {
                            window._boxever_settings = {
                            client_key: "sndbxdyjczjdeusltnggagevawvroyex",
                            target: "https://api-ap-southeast-2-production.boxever.com/v1.2",
                            cookie_domain: ".sugcon-headless-demo.xyz",
                            javascriptLibraryVersion: '1.4.9',
                            //pointOfSale: "boxever.com",
                            //web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net"
                            }
                            // load boxever.js
                            var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
                            var x = document.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);    
                        })();`,
                    }}
                ></script>
            </Head>

            {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQKPNBN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}

            {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
            <VisitorIdentification />

            {/* root placeholders for the app, which we add components to using route data */}
            <div>
                <div>{route && <Placeholder name="jss-header" rendering={route} />}</div>
                <div>{route && <Placeholder name="jss-main" rendering={route} />}</div>

                <a href="javascript:" id="return-to-top">
                    <i className="fa fa-arrow-up"></i>
                </a>
                <div>{route && <Placeholder name="jss-footer" rendering={route} />}</div>

                <Script src={`${publicUrl}/js/jquery-2.1.1.js`} />
                <Script src={`${publicUrl}/bootstrap-3.3.7/js/bootstrap.min.js`} />
                <Script src={`${publicUrl}/js/owl.carousel.js`} />
                <Script src={`${publicUrl}/js/owl.carousel.min.js`} />
                <Script src={`${publicUrl}/js/style.js`} />
                <Script src={`${publicUrl}/js/validator.min.js`} />
                <Script src={`${publicUrl}/magnific-popup/jquery.magnific-popup.js`} />
                <Script src={`${publicUrl}/magnific-popup/jquery.magnific-popup.min.js`} />
                <Script src={`${publicUrl}/magnific-popup/swiper-magnific-popup.js`} />
                {/* <Script src={`${publicUrl}/vegas/vegas.min.js`} /> */}
                <Script src={`${publicUrl}/js/custom.js`} />
            </div>
        </>
    );
};

export default Layout;

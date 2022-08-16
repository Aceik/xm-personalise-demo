import { NextPage } from 'next';
import Head from 'next/head';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();
/**
 * Rendered for 500 errors on both server and client. Used only in Production mode.
 * @link https://nextjs.org/docs/advanced-features/custom-error-page#more-advanced-error-page-customizing
 */
const FacebookPage: NextPage = () => (
    <>
        <Head>
            <title>Facebook | Ally David </title>

            <link rel="stylesheet" href={`${publicUrl}/bootstrap-3.3.7/css/bootstrap.min.css`} />
        </Head>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <a
                        href={`https://www.sugcon-headless-demo.xyz?utm_source=facebook&utm_medium=social&utm_campaign=island_competition`}
                    >
                        <img
                            src={`${publicUrl}/AllyDavid_DemoFacebook.jpg`}
                            className="mx-auto d-block"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    </>
);

export default FacebookPage;

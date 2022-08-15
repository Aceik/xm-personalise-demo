import { ComponentWithContextProps } from 'lib/component-props';
import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState, useEffect } from 'react';
import { PushIdentifyEvent } from 'lib/sitecore-cdp/sitecore-cdp';
import { useRouter } from 'next/router';

type SitecoreSendFormProps = ComponentWithContextProps & {
    fields: {
        FormID: Field<string>;
    };
};

const SitecoreSendForm = ({ fields }: SitecoreSendFormProps): JSX.Element => {
    const isEditing = useSitecoreContext()?.sitecoreContext?.pageEditing;
    const [data, setData] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();
    const pageValue = router.asPath?.split('?')[0];

    //useEffect to insert the sitecore send form into the page after the scripts it needs are loaded.
    useEffect(() => {
        setData('<div data-mooform-id="' + fields?.FormID?.value + '"></div>');
    }, []);

    //useEffect to attach additional events to the Sitecore send form Submit event to call Sitecore CDP Identify event as well
    useEffect(() => {
        setTimeout(() => {
            console.log('Delay by 1 second to allow send form to be loaded first');

            const formEmailField = document.querySelectorAll('input[name="Email"]')?.[0];
            const formButton = document.querySelectorAll('.moosend-designer-button')?.[0];
            const formFirstNameField = document.querySelectorAll('input[name="First Name"]')?.[0];
            const formLastNameField = document.querySelectorAll('input[name="Surname"]')?.[0];

            const formButtonEl = formButton as HTMLButtonElement;
            const formEmailFieldEl = formEmailField as HTMLInputElement;
            const formFirstNameFieldEl = formFirstNameField as HTMLInputElement;
            const formLastNameFieldEl = formLastNameField as HTMLInputElement;

            if (formButtonEl && !formSubmitted) {
                setFormSubmitted(true);

                const handleClick = (event: MouseEvent) => {
                    console.log('button event happened', event);
                    PushIdentifyEvent({
                        channel: 'WEB',
                        type: 'IDENTITY',
                        currency: 'AUD',
                        language: 'EN',
                        page: pageValue,
                        pos: 'Luxury Hotel',
                        // browser_id: window.Boxever.getID(),
                        email: formEmailFieldEl?.value,
                        firstname: formFirstNameFieldEl?.value,
                        lastname: formLastNameFieldEl?.value,
                        identifiers: [
                            {
                                provider: 'email',
                                id: formEmailFieldEl?.value,
                            },
                        ],
                    });
                };

                formButtonEl.addEventListener('click', handleClick);
            }
        }, 2000);
    }, [data, formSubmitted]);

    return (
        <>
            {!isEditing && fields?.FormID && (
                <section id="booking-section" className="content-booking">
                    <div className="container">
                        <div className="form-container col-sm-12">
                            {/* Sitecore Send Form*/}
                            <div
                                className="sendForm"
                                dangerouslySetInnerHTML={{ __html: data }}
                            ></div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SitecoreSendForm;

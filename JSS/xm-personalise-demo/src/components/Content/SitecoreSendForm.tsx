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
    const router = useRouter();
    const pageValue = router.asPath?.split('?')[0];
    // const FormWrapper = React.createRef<HTMLDivElement>();
    // const FormSubmitButton = FormWrapper.findDOMNode<HTMLButtonElement>();

    //useEffect to insert the sitecore send form into the page after the scripts it needs are loaded.
    useEffect(() => {
        setData('<div data-mooform-id="' + fields?.FormID?.value + '"></div>');
    }, []);

    //useEffect to attach additional events to the Sitecore send form Submit event to call Sitecore CDP Identify event as well
    useEffect(() => {
        setTimeout(() => {
            console.log('This will run after 1 second!');

            const formEmailField = document.querySelectorAll('input[name="Email"]')?.[0];
            const formButton = document.querySelectorAll('.moosend-designer-button')?.[0];
            // const form = document.querySelectorAll('form')?.[0];

            // const formEl = form as HTMLFormElement;
            const formButtonEl = formButton as HTMLButtonElement;
            const formEmailFieldEl = formEmailField as HTMLInputElement;

            // const emailValue = formEmailFieldEl?.value;

            // console.log('formbuttonel: ', formButtonEl);
            // // console.log('forminputel: ', formEmailFieldEl);
            // console.log('formel: ', formEl);
            // if (formEl) {
            //     console.log('in form el wrapper');
            //     const handleSubmit = (event: SubmitEvent) => {
            //         console.log('Submit event happened', event);
            //         PushIdentifyEvent({
            //             channel: 'WEB',
            //             type: 'VIEW',
            //             currency: 'AUD',
            //             language: 'EN',
            //             page: pageValue,
            //             pos: 'Luxury Hotel',
            //             email: emailValue,
            //             identifiers: {
            //                 id: emailValue,
            //                 provider: 'website',
            //             },
            //         });
            //     };

            //     formEl.addEventListener('submit', handleSubmit);
            //     console.log('formEl2', formEl);
            // }

            if (formButtonEl) {
                console.log('in button el wrapper');
                const handleClick = (event: MouseEvent) => {
                    console.log('button event happened', event);
                    console.log('emailValue', formEmailFieldEl?.value);
                    PushIdentifyEvent({
                        channel: 'WEB',
                        type: 'VIEW',
                        currency: 'AUD',
                        language: 'EN',
                        page: pageValue,
                        pos: 'Luxury Hotel',
                        email: formEmailFieldEl?.value,
                        identifiers: {
                            id: formEmailFieldEl?.value,
                            provider: 'website',
                        },
                    });
                };

                formButtonEl.addEventListener('click', handleClick);
                // console.log('formEl2', formEl);
            }
        }, 1000);
        // const handleClick = React.FormEvent<HTMLFormElement> => {
        //     console.log('Button clicked');
        //   };
    }, [data]);

    // const handleSubmit = React.FormEvent<HTMLFormElement> => {
    //     console.log('in the submit event');
    // };

    // const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    //     console.log('in the submit event');
    // };

    return (
        <>
            {!isEditing && fields?.FormID && (
                <section id="booking-section" className="content-booking">
                    <div className="container">
                        <div className="form-container col-sm-12">
                            {/* Sitecore Send Form*/}
                            <div dangerouslySetInnerHTML={{ __html: data }}></div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SitecoreSendForm;

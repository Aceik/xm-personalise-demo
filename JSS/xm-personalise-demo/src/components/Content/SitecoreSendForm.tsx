import { ComponentWithContextProps } from 'lib/component-props';
import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState, useEffect } from 'react';

type SitecoreSendFormProps = ComponentWithContextProps & {
    fields: {
        FormID: Field<string>;
    };
};

const SitecoreSendForm = ({ fields }: SitecoreSendFormProps): JSX.Element => {
    const isEditing = useSitecoreContext()?.sitecoreContext?.pageEditing;
    const [data, setData] = useState('');

    useEffect(() => {
        console.log('useEffect');
        setData('<div data-mooform-id="' + fields?.FormID?.value + '"></div>');
    });

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

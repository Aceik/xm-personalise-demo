import { ComponentWithContextProps } from 'lib/component-props';
import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

type SitecoreSendFormProps = ComponentWithContextProps & {
    fields: {
        FormID: Field<string>;
    };
};

const SitecoreSendForm = ({ fields }: SitecoreSendFormProps): JSX.Element => {
    const isEditing = useSitecoreContext()?.sitecoreContext?.pageEditing;
    const [data, setData] = useState('');
    const FormWrapper = React.createRef<HTMLDivElement>();
    // const FormSubmitButton = FormWrapper.findDOMNode<HTMLButtonElement>();

    useEffect(() => {
        setData('<div ref= data-mooform-id="' + fields?.FormID?.value + '"></div>');

        const formEmailField =
            document.querySelectorAll<HTMLInputElement>('input[name="Email"]')?.[0];
        console.log(formEmailField.value);

        const formButton = document.querySelectorAll<HTMLButtonElement>(
            '.moosend-designer-button'
        )?.[0];
        console.log(formButton.value);

        //https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
        // const blah = ReactDOM.findDOMNode(FormWrapper); .get.getElementsByClassName('');
        // 'moosend-designer-button'
    }, []);

    return (
        <>
            {!isEditing && fields?.FormID && (
                <section id="booking-section" className="content-booking">
                    <div className="container">
                        <div className="form-container col-sm-12">
                            {/* Sitecore Send Form*/}
                            <div ref={FormWrapper} dangerouslySetInnerHTML={{ __html: data }}></div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SitecoreSendForm;

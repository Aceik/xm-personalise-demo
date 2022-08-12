import { ComponentWithContextProps } from 'lib/component-props';
import { Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

type SitecoreSendFormProps = ComponentWithContextProps & {
    fields: {
        FormID: Field<string>;
    };
};

const SitecoreSendForm = ({ fields }: SitecoreSendFormProps): JSX.Element => {
    const isEditing = useSitecoreContext()?.sitecoreContext?.pageEditing;
    return (
        <>
            {!isEditing && fields?.FormID && (
                <section id="booking-section" className="content-booking">
                    <div className="container">
                        <div className="form-container col-sm-12">
                            <div data-mooform-id="80b155a7-06ed-46df-b0d6-08d42359e2fc"></div>
                            {/* Sitecore Send Form*/}
                            <div data-mooform-id={`${fields?.FormID?.value}`}></div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SitecoreSendForm;

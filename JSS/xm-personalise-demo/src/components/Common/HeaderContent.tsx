import {
    Text,
    LinkField,
    Field,
    withDatasourceCheck,
    Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderContentProps = ComponentProps & {
    fields: {
        Title: Field<string>;
        SubTitle: Field<string>;
        HeaderCTA: LinkField;
    };
};

const HeaderContent = ({ fields }: HeaderContentProps): JSX.Element => (
    <div className="intro center-vertically">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="header-content text-center">
                        <p>
                            <Text field={fields?.Title} editable={true} />
                        </p>
                        <h1 className="margin-auto">
                            <Text field={fields?.SubTitle} editable={true} />
                        </h1>
                        <Link field={fields?.HeaderCTA} className="btn btn-rs" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default withDatasourceCheck()<HeaderContentProps>(HeaderContent);

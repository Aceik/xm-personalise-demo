import {
    Text,
    Image,
    Field,
    ImageField,
    withDatasourceCheck,
    Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
    fields: {
        Phone: Field<string>;
        Email: Field<string>;
        Address: Field<string>;
        Logo: ImageField;
        BackgroundImage: ImageField;
    };
};

const Header = ({ rendering, fields }: HeaderProps): JSX.Element => {
    return (
        <>
            <div
                id="header-background"
                style={{
                    backgroundImage: `url('${fields?.BackgroundImage?.value?.src}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top / cover',
                }}
            >
                <div id="topbar" className="topbar-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="top-menu">
                                    {fields?.Phone && (
                                        <li>
                                            <a href="#">
                                                Phone: <Text field={fields?.Phone} />
                                            </a>
                                        </li>
                                    )}

                                    {fields?.Email && (
                                        <li>
                                            <a href="#">
                                                Email: <Text field={fields?.Email} />
                                            </a>
                                        </li>
                                    )}

                                    {fields?.Address && (
                                        <li>
                                            <a href="#">
                                                Address: <Text field={fields?.Address} />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <header id="header" className="header-transparent">
                    <div id="header-wrap">
                        <div className="container">
                            <div id="logo">
                                <a href="/" className="logo" data-dark-logo="images/logo-dark.png">
                                    <Image field={fields?.Logo} editable={true} />
                                </a>
                            </div>
                            <Placeholder key="header-nav" name="header-nav" rendering={rendering} />
                        </div>
                    </div>
                </header>
                <Placeholder key="header-content" name="header-content" rendering={rendering} />
            </div>
        </>
    );
};

export default withDatasourceCheck()<HeaderProps>(Header);

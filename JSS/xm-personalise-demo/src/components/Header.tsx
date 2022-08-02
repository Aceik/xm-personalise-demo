import { Text, Image, Field, ImageField, withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    Phone: Field<string>;
    Email: Field<string>;
    Address: Field<string>;
    Logo: ImageField;
    BackgroundImage: ImageField;    

    // public HeaderNavigation HeaderNavigation { get; set; }
    }
};

const Header = ({ rendering, fields }: HeaderProps): JSX.Element => {
  
    return (
        <>
            <div id="header-background" style={{backgroundImage: `url('${fields?.BackgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top / cover' }}>
                <div id="topbar" className="topbar-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="top-menu">
                                    {fields?.Phone && (
                                        <li><a href="#">Phone: <Text field={fields?.Phone} /></a></li>
                                    )}

                                    {fields?.Email && (
                                        <li><a href="#">Email: <Text field={fields?.Email} /></a></li>
                                    )}

                                    {fields?.Address && (
                                        <li><a href="#">Address: <Text field={fields?.Address} /></a></li>
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
                            {/* @if (Model.HeaderNavigation != null && Model.HeaderNavigation.TopNavigations != null
                                && Model.HeaderNavigation.TopNavigations.Count > 0)
                            {
                                <div className="container">
                                    <nav id="hmenu">
                                        <div id="head-mobile"></div>
                                        <div className="button"></div>
                                        <ul>
                                            @foreach (var item in Model.HeaderNavigation.TopNavigations)
                                            {
                                                <li className='@item.ActiveClass'><a href='@item.NavigationLink'>@item.NavigationTitle</a></li>

                                                @*<li>
                                                        <a href='#rooms'>Rooms</a>
                                                        <ul>
                                                            <li><a href='room-grid.html'>Room Grid</a> </li>
                                                            <li><a href='room-list.html'>Room List</a> </li>
                                                            <li><a href='single-room.html'>Single Room</a> </li>
                                                        </ul>
                                                    </li>*@
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            } */}
                        </div>
                    </div>
                </header>
            <Placeholder key="header-content" name="header-content" rendering={rendering} />        
        </div>
    </>
    );
};

export default withDatasourceCheck()<HeaderProps>(Header);

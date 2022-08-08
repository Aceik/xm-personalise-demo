import { Text, Image, LinkField, Link, Field, ImageField, withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    CopyrightText: Field<string>;
    AboutUs: Field<string>;
    CallToAction: LinkField;
    Logo: ImageField;      
    SectionTitle: Field<string>;
    Address: Field<string>;
    Phone1: Field<string>;
    Phone2: Field<string>;
    Email: Field<string>;
    
    SocialLinks: Array<string>;    
    Widgets: Array<string>;  
    }
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  
    return (        
        <footer>
            <section className="clearfix footer-wrapper">
                <div className="container clearfix footer-pad">
                    <div className="widget about-us-widget col-md-4 col-sm-6">
                        <a href="/">                        
                            <Image field={fields?.Logo} editable={true} class="img-responsive" />                                                                                                                    
                        </a>
                        <p>
                            <Text field={fields?.AboutUs} />
                        </p>

                        <Link field={fields?.CallToAction} showLinkTextWithChildrenPresent={false}>
                            <i className="fa fa-angle-double-right"></i> 
                        </Link>

                        <ul className="nav">
                            {/* @foreach (var socialLink in Model.SocialLinks)
                            {
                                <li>
                                    @using (Html.Glass().BeginRenderLink(socialLink, f => f.Navigation_Link))
                                    {
                                        <i className="fa @socialLink.SocialIcon.ClassName"></i>
                                    }
                                </li>
                            } */}
                            </ul>
                        </div>
                        {fields?.Widgets && (                        
                            fields?.Widgets?.length > 0 &&
                            fields?.Widgets.map((widget: String, index: number) => {
                            // const widgetKey = widget.id || index;                                         
                                return (                               
                                    <div className="widget widget-links col-md-2 col-sm-6">
                                        {/* <h4 className="widget_title">@Html.Glass().Editable(widget, f => f.WidgetTitle)</h4> */}
                                        {/* @if (widget.Links != null)
                                        { */}
                                            <div className="widget-contact-list">
                                                <ul>
                                                    {/* @foreach (var link in widget.Links)
                                                    {
                                                        <li>
                                                            @Html.Glass().Editable(link, f => f.Navigation_Link)
                                                        </li>
                                                    } */}
                                                </ul>
                                            </div>
                                        {/* } */}
                                    </div>                                                                            
                                );
                            })
                        )}
                        
                            <div className="widget widget-links col-md-2 col-sm-6">
                                <h4 className="widget_title">Explore</h4>
                                <div className="widget-contact-list"> 
                                    <ul>
                                        <li><a href="/activities">Activities</a></li>
                                        <li><a href="/gallery1">Gallery</a></li>
                                        <li><a href="/aminities">Amenities</a></li>
                                        <li><a href="/rooms/single-room">Single Room</a></li>
                                        <li><a href="/testimonials">Testimonials</a></li>
                                        <li><a href="/our-restaurant">Dinning</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="widget widget-links col-md-2 col-sm-6">
                                <h4 className="widget_title">Quick Links</h4>
                                <div className="widget-contact-list"> 
                                    <ul>
                                        <li><a href="/home-with-slideshow">Home slideshow</a></li>
                                        <li><a href="/aboutus">About Us</a></li>
                                        <li><a href="/suite-room">suits &amp; Rooms</a></li>
                                        <li><a href="/blog">News</a></li> 
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="#booking-section">Booking</a></li>
                                    </ul>
                                </div>
                            </div>

                        <div className="widget get-in-touch col-md-4 col-sm-6">
                            <h4 className="widget_title"><Text field={fields?.SectionTitle} /></h4>
                            <div className="widget-contact-list">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <div className="fleft location_address">
                                            <Text field={fields?.Address} />
                                        </div>

                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <div className="fleft contact_no">                                        
                                            <a href={`tel:${fields?.Phone1}`}><Text field={fields?.Phone1} /></a>                                            
                                            <a href={`tel:${fields?.Phone2}`}><Text field={fields?.Phone2} /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o"></i>
                                        <div className="fleft contact_mail">
                                            <a href="mailto:@Model.Email"><Text field={fields?.Email} /></a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            <div className="container clearfix footer-b-pad">
                <div className="footer-copy">
                    <div className="pull-left fo-txt">
                        <p><Text field={fields?.CopyrightText} /></p>
                    </div>
                </div>
            </div>
        </footer>
        
    );
};

export default withDatasourceCheck()<FooterProps>(Footer);

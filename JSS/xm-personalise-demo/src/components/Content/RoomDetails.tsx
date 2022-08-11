import {
    // Text,
    Field,
    ImageField,
    Item,
    Image,
    RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type RoomDetailsProps = ComponentProps & {
    fields: {
        Name: Field<string>;
        Summary: Field<string>;
        Description: Field<string>;

        Images: Array<ImageItem>;
        ThumbnailImage: ImageField;

        PricePerNight: Field<number>;

        Facilities: Array<Item>;
        Special: Field<string>;
    };
};

type ImageItem = ComponentProps & {
    id: string;
    url: string;
};

const RoomDetails = ({ fields }: RoomDetailsProps): JSX.Element => {
    console.log('fields', fields);
    return (
        <section id="room-single-section" className="content-room-single">
            <div className="container">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    {/* Start of carousel */}
                    <div className="single-room-carousel owl-carousel owl-theme">
                        {fields?.Images &&
                            fields?.Images.map((image: ImageItem) => (
                                <div className="item-single-room">
                                    <div className="popup-gallery">
                                        <a href="#" title="Relax time">
                                            <img src={image?.url} alt="Room hotel" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* End of carousel */}
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="room-extra-service">
                        <div className="row"></div>
                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-television"
                                data-toggle="tooltip"
                                title="This room has cable TV"
                            ></span>
                            <br /> <span className="center">Cable TV</span>
                        </div>

                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-bath"
                                data-toggle="tooltip"
                                title="Bathroom"
                            ></span>
                            <br /> <span className="center">Bath</span>
                        </div>

                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-wifi"
                                data-toggle="tooltip"
                                title="Free Wifi hotspot"
                            ></span>{' '}
                            <br /> <span className="center">Free Wifi</span>
                        </div>

                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-glass"
                                data-toggle="tooltip"
                                title="Bottle of wine"
                            ></span>
                            <br /> <span className="center">Gift</span>
                            <div className="tooltip">Github</div>
                        </div>

                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-bed"
                                data-toggle="tooltip"
                                title="Double bed"
                            ></span>{' '}
                            <br /> <span className="center">King bed</span>
                        </div>

                        <div className="col-lg-2 col-sm-3 col-xs-6 center">
                            <span
                                className="fa fa-street-view"
                                data-toggle="tooltip"
                                title="Sea view"
                            ></span>{' '}
                            <br /> <span className="center">Sea view</span>
                        </div>
                    </div>

                    <RichText field={fields?.Description} editable={true} />

                    {/* <h2>More info about our room</h2>
                    <p>
                        A communi observantia non est recedendum. Inmensae subtilitatis, obscuris et
                        malesuada fames. Hi omnes lingua, institutis, legibus inter se differunt.
                        Nec dubitamus multa iter quae et nos invenerat. Phasellus laoreet lorem vel
                        dolor tempus vehicula. Praeterea iter est quasdam res quas ex communi.{' '}
                        <br /> <br />
                        Nec dubitamus multa iter quae et nos invenerat. Phasellus laoreet lorem vel
                        dolor tempus vehicula. Praeterea iter est quasdam res quas ex communi.
                        Inmensae subtilitatis, obscuris et malesuada fames
                    </p> */}
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="tab" role="tabpanel">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation">
                                <a
                                    href="#pricetable"
                                    aria-controls="home"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    <i className="fa fa-user"></i>Price table
                                </a>
                            </li>
                            <li role="presentation" className="active">
                                <a
                                    href="#aboutroom"
                                    aria-controls="profile"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    <i className="fa fa-cube"></i>About room
                                </a>
                            </li>
                            <li role="presentation">
                                <a
                                    href="#askinfo"
                                    aria-controls="messages"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    <i className="fa fa-envelope"></i>Ask info
                                </a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content tabs">
                            <div role="tabpanel" className="tab-pane" id="pricetable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Month</th>
                                            <th>No person</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-column="Month">August</td>
                                            <td data-column="No person">1</td>
                                            <td data-column="Price">32.5 USD</td>
                                        </tr>
                                        <tr>
                                            <td data-column="Month">August</td>
                                            <td data-column="No person">2</td>
                                            <td data-column="Price">50.2 USD</td>
                                        </tr>
                                        <tr>
                                            <td data-column="Month">August</td>
                                            <td data-column="No person">3</td>
                                            <td data-column="Price">70 USD</td>
                                        </tr>
                                        <tr>
                                            <td data-column="Month">August</td>
                                            <td data-column="No person">4</td>
                                            <td data-column="Price">120 USD</td>
                                        </tr>
                                        <tr>
                                            <td data-column="Month">August</td>
                                            <td data-column="No person">+4</td>
                                            <td data-column="Price">220 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in active" id="aboutroom">
                                <RichText field={fields?.Description} editable={true} />
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="askinfo">
                                <p> Write us and we will contact you soon as possible.</p>
                                {/* Contact Form */}
                                <form id="ContactForm" data-toggle="validator">
                                    <div className="form-same-line form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="hfirstname"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-same-line form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="hlastname"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-same-line form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="hemail"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            id="hmessage"
                                            placeholder="Write your message here"
                                            rows={4}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="button-small-solid">
                                            SUBMIT
                                        </button>
                                        <div
                                            id="cmsgSubmit"
                                            className="h3 text-center hidden"
                                        ></div>
                                    </div>
                                </form>
                                {/* end of contact form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default RoomDetails;

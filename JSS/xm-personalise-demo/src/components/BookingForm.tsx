import { ComponentWithContextProps } from 'lib/component-props';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

type BookingFormProps = ComponentWithContextProps & {
    fields: {
        Title: Field<string>;
    };    
};

const BookingForm = ({ }: BookingFormProps): JSX.Element => {    
    return (                           
        <section id="booking-section" className="content-booking">
            <div className="container">
                <div className="form-container col-sm-12">
                    <h2> Make <span> Reservation</span></h2>                
                    <form id="BookingForm" data-toggle="validator">

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type="text" className="form-control" id="byourname" placeholder="Your Name" required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type="number" className="form-control" id="bnumberofrooms" placeholder="Number of rooms"
                                required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type="email" className="form-control" id="bemail" placeholder="Email" required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type="number" className="form-control" id="bnumberofpeople" placeholder="Number of people"
                                required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type="text" className="form-control" id="bphonenumber" placeholder="Phone number" required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type='date' className="form-control" id="bcheckin" defaultValue="2019-08-27" required/>

                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <input type='date' className="form-control" id="bcheckout" defaultValue="2019-08-29" required/>
                        </div>

                        <div className="form-group col-md-3 col-sm-6 col-xs-12">
                            <button type="submit" className="button-small-solid">Book Now</button>
                            <div id="bmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>            
                </div>
            </div>
        </section>                                             
    );
};

export default BookingForm;

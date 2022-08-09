import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type RoomsCarouselProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    SubTitle: Field<string>;    
    Rooms: Array<RoomItem>;
  };
};

type RoomItem = ComponentProps & {
    id: string;
    url: string;
    fields: {
        ThumbnailImage: ImageField;
        Name: Field<string>;
        PricePerNight: Field<string>;
        Special: Field<string>;
        Summary: Field<string>;
        Images?: Array<string>;
    }
}

const RoomsCarousel = ({ fields }: RoomsCarouselProps): JSX.Element => {    
    return (        
        <section className="room-section" id="rooms">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="section_title">
                            <h2><Text field={fields?.Title} /></h2>
                            <h3><Text field={fields?.SubTitle} /></h3>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="room-carousel owl-carousel owl-theme">                        
                        {fields?.Rooms &&
                            fields?.Rooms.map((room: RoomItem) => (                                                   
                                <div key={room.id} className="item-room">                                                                                                       
                                    <div className="room-image">
                                        {room?.fields?.ThumbnailImage && (
                                        
                                            <img src={room?.fields?.ThumbnailImage?.value?.src} />
                                        )}
                                    </div>
                                    <div className="room-text">
                                        <a href={`${room?.url}`}><h2>{room?.fields?.Name?.value}</h2></a>
                                        <span>{room?.fields?.Special?.value}</span>
                                        <p>{room?.fields?.Summary?.value}</p>
                                    </div>
                                    <div className="ro-text-two">
                                        <div className="room-book pull-left">
                                            <a href={`${room?.url}`} className="res-btn">Book now</a>
                                        </div>
                                        <div className="room-price pull-right">
                                            <p>{room?.fields?.PricePerNight?.value} $<br /><span>Per Night</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default withDatasourceCheck()<RoomsCarouselProps>(RoomsCarousel);

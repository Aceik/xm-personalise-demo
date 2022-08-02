import { Image, Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type RoomsCarouselProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    SubTitle: Field<string>;
    //TODO: Get array of rooms using content resolver
    //Get array of images from images field and get first one as thumbnail image


    // Image1: ImageField;
    // Image2: ImageField;
    // Image3: ImageField;
  };
};

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
                    @foreach (var room in Model.Rooms)
                    {
                        <div className="item-room">
                            <div className="room-image">
                                @if (room.ThumbnailImage != null)
                                {
                                    <img src="@room.ThumbnailImage.Src" />
                                }
                            </div>
                            <div className="room-text">
                                <a href="@room.Url"><h2>@Html.Glass().Editable(room, f => f.Name)</h2></a>
                                <span>@Html.Glass().Editable(room, f => f.Special)</span>
                                <p>
                                    @Html.Glass().Editable(room, f => f.Summary)
                                </p>
                            </div>
                            <div className="ro-text-two">
                                <div className="room-book pull-left">
                                    <a href="@room.Url" className="res-btn">Book now</a>
                                </div>
                                <div className="room-price pull-right">
                                    <p>@Html.Glass().Editable(room, f => f.PricePerNight) $<br /><span>Per Night</span></p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </section>
    );
}
export default withDatasourceCheck()<RoomsCarouselProps>(RoomsCarousel);

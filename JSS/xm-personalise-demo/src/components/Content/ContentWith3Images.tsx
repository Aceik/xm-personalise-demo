import {
    Image,
    RichText,
    Field,
    ImageField,
    withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ContentWith3ImagesProps = ComponentProps & {
    fields: {
        Title: Field<string>;
        Summary: Field<string>;
        Image1: ImageField;
        Image2: ImageField;
        Image3: ImageField;
    };
};

const ContentWith3Images = ({ fields }: ContentWith3ImagesProps): JSX.Element => (
    <section id="discover" className="content">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="text-left single-content">
                        <RichText className="" field={fields?.Title} />
                        <RichText className="" field={fields?.Summary} />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="text-left">
                        <div className="popup-gallery">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <a
                                    className="image-popup-no-margins"
                                    href="@image1Source"
                                    title="Relax time"
                                >
                                    <Image field={fields?.Image1} editable={true} />
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <a
                                    className="image-popup-no-margins"
                                    href="@image2Source"
                                    title="Free place on beach"
                                >
                                    <Image field={fields?.Image2} editable={true} />
                                </a>
                                <div className="space-bottom-large"> </div>
                                <a
                                    className="image-popup-no-margins"
                                    href="@image3Source"
                                    title="Relax"
                                >
                                    <Image field={fields?.Image3} editable={true} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default withDatasourceCheck()<ContentWith3ImagesProps>(ContentWith3Images);

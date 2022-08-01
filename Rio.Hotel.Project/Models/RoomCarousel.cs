using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Configuration;
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;
using Sitecore.Data;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{F4ADBEDF-742D-48BE-B1C5-58D0BF5BBE48}")]
    public class RoomCarousel:GlassBase
    {
        [SitecoreField(FieldId = "{23F10320-8099-4E94-BCA5-6A4BED66B2DF}")]
        public virtual string Title { get; set; }

        [SitecoreField(FieldId = "{D0FA7481-333A-4E28-BE7E-B35EEBA3740E}")]
        public virtual string SubTitle { get; set; }

        [SitecoreField(FieldId = "{42546BED-4BEB-4271-B2D4-78B1D04FECE1}")]
        public virtual IEnumerable<Room> Rooms { get; set; }

    }
}
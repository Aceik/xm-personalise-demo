using Glass.Mapper.Sc.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{4480F080-1966-41A5-B409-7D95930FA4CE}")]
    public class HotelServices:GlassBase
    {
        [SitecoreField(FieldId = "{4BDFDD84-D0EE-488D-A767-529BDA51CDCD}")]
        public virtual string Title { get; set; }

        [SitecoreField(FieldId = "{AD158671-5954-4016-9F2F-B6A5B25F0B40}")]
        public virtual string SubTitle { get; set; }

        [SitecoreField(FieldId = "{FCE69BFC-FB68-41ED-9F8A-C1324CC001AE}")]
        public virtual IEnumerable<Service> Services { get; set; }

        [SitecoreField(FieldId = "{973318FA-8614-4B7F-8776-FC52A6A6BA16}")]
        public virtual Image ServicesImage { get; set; }
    }
}
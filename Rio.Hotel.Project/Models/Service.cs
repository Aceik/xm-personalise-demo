using Glass.Mapper.Sc.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{FD9DEA7C-4B7D-4908-9DD0-DB25159F1698}")]
    public class Service:GlassBase
    {
        [SitecoreField(FieldId = "{28DED127-159A-41E3-BD25-B1A0B4FFDE61}")]
        public virtual string ServiceTitle { get; set; }

        [SitecoreField(FieldId = "{D76DA05F-C9F1-4D39-AF73-994D964394BA}")]
        public virtual string ServiceSummary { get; set; }
    }
}
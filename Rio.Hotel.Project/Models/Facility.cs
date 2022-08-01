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
    [SitecoreType(TemplateId = "{AFF45F08-2330-4EF7-938B-A98D4BA27DDB}")]
    public class Facility:GlassBase
    {
        [SitecoreField(FieldId = "{54371501-EE9F-4091-B027-8F8D660EFA4F}")]
        public virtual string Name { get; set; }
        [SitecoreField(FieldId = "{D02E270E-E6D0-43CC-9F70-28C1E1EA4EA7}")]
        public virtual string ToolTip { get; set; }
        [SitecoreField(FieldId = "{368ACE87-1A7C-4036-B55F-D585A4350687}")]
        public virtual Icon Icon { get; set; }
    }

    [SitecoreType(TemplateId = "{D7D6D03E-6A3B-47AD-9456-6FE48EB4F25D}")]
    public class Icon:GlassBase
    {
        [SitecoreField(FieldId = "{ABCF9786-2502-4488-A711-0B30180A33F3}")]
        public virtual string ClassName { get; set; }
    }
}
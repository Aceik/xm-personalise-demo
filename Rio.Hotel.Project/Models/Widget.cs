using System.Collections.Generic;
using System.Linq;
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{213DA47E-22B1-4875-A211-E4B29D6B5C2F}")]
    public class Widget:GlassBase
    {
        [SitecoreField(FieldId = "{0E4DB51E-5851-4E8E-B2A6-C2759314188E}")]
        public virtual string WidgetTitle { get; set; }

        [SitecoreField(FieldId = "{7BD2FC94-1018-4FE1-8188-50C065301AC7}")]
        public virtual IEnumerable<NavigationLink> Links { get; set; }
    }
}
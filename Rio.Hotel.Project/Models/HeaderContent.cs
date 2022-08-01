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
    [SitecoreType(TemplateId = "{46104B48-0A13-41F2-BB52-E27AD6D00C7D}")]
    public class HeaderContent:GlassBase
    {
        [SitecoreField(FieldId = "{62313319-7CBA-44A1-A1BF-B26646CD49D4}")]
        public virtual string Title { get; set; }
        [SitecoreField(FieldId = "{F2493C1B-E754-4777-A361-1AFE6EA62006}")]
        public virtual string SubTitle { get; set; }
        [SitecoreField(FieldId = "{A173FABE-30A4-4F62-90DB-19A738D15CDD}")]
        public virtual Link CalltoAction { get; set; }
    }
}
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;
using System.Collections.Generic;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{C271CB45-4559-4B69-89B0-EA2CF29ED14A}")]
    public class BlogList:GlassBase
    {
        [SitecoreField(FieldId = "{53D5DC85-5C87-471A-8D74-34445051315F}")]
        public virtual string Title { get; set; }
        [SitecoreField(FieldId = "{0E2A0F92-1245-41F5-8871-83B575F2ADE4}")]
        public virtual string SubTitle { get; set; }
        [SitecoreField(FieldId = "{8CA82A6C-86D9-4FEC-B9FE-FFE0D009F964}")]
        public virtual IEnumerable<BlogPost> BlogPosts { get; set; }
    }
}
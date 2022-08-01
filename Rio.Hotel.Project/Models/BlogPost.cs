using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{898AD406-4672-46E9-B18B-073C7D46A1D8}")]
    public class BlogPost:GlassBase
    {
        [SitecoreField(FieldId = "{339939AB-2304-4E71-BE2A-60B95A5036E0}")]
        public virtual string Title { get; set; }
        
        [SitecoreField(FieldId = "{22C4E082-E427-49BE-9AEE-701BA7E1D73F}")]
        public virtual string Summary { get; set; }
        
        [SitecoreField(FieldId = "{38A72C9D-4C81-4790-AC69-F3CC3465F645}")]
        public virtual string Description { get; set; }
        
        [SitecoreField(FieldId = "{C5D9176F-9BB8-449F-AEEF-FE456E43BCEB}")]
        public virtual Image BlogImage { get; set; }
        public virtual string ClassName { get; set; }
    }
}
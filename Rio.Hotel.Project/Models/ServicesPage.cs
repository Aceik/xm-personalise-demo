using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{FEA630B6-95EC-45AC-AE45-101D865211CA}")]
    public class ServicesPage : GlassBase
    {
        [SitecoreField(FieldId = "{2AC6D3D9-8DB9-40A4-9B29-8051A1167F5D}")]
        public virtual string Title { get; set; }

        [SitecoreField(FieldId = "{BCE6B2E2-D2D2-4436-BF19-6C21680904AB}")]
        public virtual string Summary { get; set; }

        [SitecoreField(FieldId = "{3DF7A781-BCD6-4D5F-BF35-77AB606A284D}")]
        public virtual string Description { get; set; }

        [SitecoreField(FieldId = "{4A6B2720-82C2-4775-98D4-32DD63C70C47}")]
        public virtual Image ServicesImage { get; set; }        
    }
}
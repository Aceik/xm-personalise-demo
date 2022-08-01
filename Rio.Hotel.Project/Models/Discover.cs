using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{9DFBD695-0246-4631-8FE9-A00882CFFE6B}")]
    public class Discover:GlassBase
    {
        [SitecoreField(FieldId = "{A354ABA7-3061-4B85-BFAC-DA6414B70181}")]
        public virtual string Title { get; set; }
        [SitecoreField(FieldId = "{CFAC15CE-C673-45DA-8D78-B7A9C5394DDE}")]
        public virtual string Summary { get; set; }

        [SitecoreField(FieldId = "{7AC38E2B-B263-4B8E-AEB7-76C37BD9506A}")]
        public virtual Image Image1 { get; set; }

        [SitecoreField(FieldId = "{C7315A0A-0E78-4346-9D51-55176854FC05}")]
        public virtual Image Image2 { get; set; }

        [SitecoreField(FieldId = "{CF1CA3BB-3C74-4EAC-BD97-17D5BAEDA1E8}")]
        public virtual Image Image3 { get; set; }
    }
}
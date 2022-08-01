using Glass.Mapper.Sc.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
    [SitecoreType(TemplateId = "{BD63969B-77E0-42E8-941F-A6AE30157CBE}")]
    public class Header:GlassBase
    {
        [SitecoreField(FieldId = "{4F6E2621-4765-4C88-AB4F-42339815FB14}")]
        public virtual string Phone { get; set; }

        [SitecoreField(FieldId = "{0C71B0A9-51E1-467C-B051-EAD07C4DAF4F}")]
        public virtual string Email { get; set; }

        [SitecoreField(FieldId = "{2C96CCD1-40BC-4D73-B59B-C0F786C7F94C}")]
        public virtual string Address { get; set; }

        [SitecoreField(FieldId = "{23B9646A-C8C3-457F-A999-B10029CAEF4B}")]
        public virtual Image Logo { get; set; }

        [SitecoreField(FieldId = "{ED4AC1D5-C048-4952-8665-4F6E8BB012EA}")]
        public virtual Image BackgroundImage { get; set; }
        public HeaderNavigation HeaderNavigation { get; set; }
    }
}
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
    [SitecoreType(TemplateId = "{167DAC9D-C492-4D93-858B-5C8B4028F024}")]
    public class _BasePage:GlassBase
    {
        [SitecoreField(FieldId = "{267F4772-E84C-4066-9CF1-A0307B42C3C0}")]
        public virtual string PageTitle { get; set; }
        [SitecoreField(FieldId = "{32028D0D-9723-49CA-A6C3-E1914424FFF5}")]
        public virtual string PageSubTitle { get; set; }
    }
}
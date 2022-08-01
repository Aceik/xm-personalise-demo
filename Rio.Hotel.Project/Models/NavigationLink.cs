using System.Collections.Generic;
using System.Linq;
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
	[SitecoreType(TemplateId = "{480F6231-7042-4D34-A316-CF3EAD6CA182}")]
	public class NavigationLink:GlassBase
	{
		[SitecoreField(FieldId = "{152E87BB-A22F-4D9F-ACA2-2C08AF7DF2B0}")]
		public virtual string NavigationTitle { get; set; }

		[SitecoreField(FieldId = "{21B51ADF-2680-45FA-B7A0-E46AD9B4AC23}")]
		public virtual Link Navigation_Link { get; set; }

		[SitecoreField(FieldId = "{7EDDF013-2934-419E-B068-5C6C2DE99864}")]
		public virtual Icon SocialIcon { get; set; }
	}
}
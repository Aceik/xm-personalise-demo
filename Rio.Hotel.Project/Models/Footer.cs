using Glass.Mapper.Sc.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
	[SitecoreType(TemplateId = "{4D6A9BE7-1B77-4F69-AE11-6A97723B568E}")]
	public class Footer:GlassBase
	{
		[SitecoreField(FieldId = "{D33900E1-7278-4D3C-8F2E-05D42A6CAB89}")]
		public virtual string CopyrightText { get; set; }

		[SitecoreField(FieldId = "{70D8579E-143F-45D2-9318-E35B5672ED4A}")]
		public virtual Image Logo { get; set; }

		[SitecoreField(FieldId = "{005A50E4-46EE-4FE9-9F9A-C8F7A77BB7D0}")]
		public virtual string Aboutus { get; set; }

		[SitecoreField(FieldId = "{E9F806F3-BDCE-4CC5-9A35-A95659BEAE11}")]
		public virtual Link CalltoAction { get; set; }

		[SitecoreField(FieldId = "{31B18260-DB2E-47AE-B1B7-34AB6F2C3D7D}")]
		public virtual IEnumerable<NavigationLink> SocialLinks { get; set; }

		[SitecoreField(FieldId = "{AD7DE1C7-2108-4E05-9C3E-14D34070432E}")]
		public virtual IEnumerable<Widget> Widgets { get; set; }

		[SitecoreField(FieldId = "{BC82997B-190A-4AAC-8FBE-41CA60A12AEA}")]
		public virtual string SectionTitle { get; set; }

		[SitecoreField(FieldId = "{306E9F15-BA5F-4F1D-9844-C542BB0EF333}")]
		public virtual string Address { get; set; }

		[SitecoreField(FieldId = "{F9209F05-5C40-4560-BDA1-922F8E5B1D27}")]
		public virtual string Phone1 { get; set; }

		[SitecoreField(FieldId = "{AF91C819-FEE1-4251-B2B4-C450F9FCEE1F}")]
		public virtual string Phone2 { get; set; }

		[SitecoreField(FieldId = "{95AD8A9B-FDAC-4F00-A7A2-A6603B245936}")]
		public virtual string Email { get; set; }
	}	
}
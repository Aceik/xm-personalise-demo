using System.Collections.Generic;
using System.Linq;
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace Rio.Hotel.Project.Models
{
	[SitecoreType(TemplateId = "{1BD55756-C7A2-45F3-9CF0-E234BB17335E}")]
	public class Room : GlassBase
	{
		[SitecoreField(FieldId = "{B04AA9D0-5759-4B19-BC5A-16941D70C451}")]
		public virtual string Name { get; set; }

		[SitecoreField(FieldId = "{19F694CC-3C35-45F1-876B-3EBE431F4F32}")]
		public virtual string Summary { get; set; }

		[SitecoreField(FieldId = "{30F00244-6C39-48C8-8008-7012465ECE79}")]
		public virtual string Description { get; set; }

		[SitecoreField(FieldId = "{BE101385-A390-4EC5-B7E7-1E2C76F19C18}")]
		public virtual IEnumerable<Image> Images { get; set; }

		public Image ThumbnailImage
		{
			get
			{
				return Images?.FirstOrDefault();
			}
		}

		[SitecoreField(FieldId = "{916D1655-B8C2-4D97-94B6-B17A9F42E64B}")]
		public virtual double PricePerNight { get; set; }

		[SitecoreField(FieldId = "{110600E7-F171-4681-890A-7114579B1FBA}")]
		public virtual IEnumerable<Facility> Facilities { get; set; }

		[SitecoreField(FieldId = "{3727CEED-E3F1-425F-BC41-B089A3EEA9E3}")]
		public virtual string Special { get; set; }
	}
}
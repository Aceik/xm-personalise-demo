using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Sitecore.Diagnostics;
using Sitecore.Data.Items;
using Sitecore.Mvc.Presentation;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;

namespace SUGCON.Demo.SitecoreExtensions.ContentsResolvers
{
    /// <summary>
    /// Page List Contents Resolver
    /// Return Page List child items
    /// </summary>
    public class PageListContentsResolver : RenderingContentsResolver
    {
        public PageListContentsResolver()
        {
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            Assert.ArgumentNotNull((object)rendering, nameof(rendering));
            Assert.ArgumentNotNull((object)renderingConfig, nameof(renderingConfig));

            Item contextItem = rendering.Item;
            if (contextItem == null)
            {
                return (object)null;
            }

            JObject jobject = new JObject()
            {
                ["items"] = (JToken)new JArray()
            };

            IEnumerable<Item> childItems = this.GetItems(contextItem);

            //get direct child items of the current page which aren't the data template folder.
            List<Item> childItemsList = childItems != null ? childItems.Where(x => x.TemplateID.ToString() != "{1C82E550-EBCD-4E5D-8ABD-D50D0809541E}").ToList<Item>() : (List<Item>)null;

            if (childItemsList == null || childItemsList.Count == 0)
            {
                return (object)jobject;
            }

            jobject["items"] = (JToken)this.ProcessItems((IEnumerable<Item>)childItemsList, rendering, renderingConfig);

            return (object)jobject;
        }

        protected override IEnumerable<Item> GetItems(Item contextItem)
        {
            Assert.ArgumentNotNull((object)contextItem, nameof(contextItem));

            return contextItem.HasChildren ? (IEnumerable<Item>)contextItem.Children : Enumerable.Empty<Item>();
        }
    }
}
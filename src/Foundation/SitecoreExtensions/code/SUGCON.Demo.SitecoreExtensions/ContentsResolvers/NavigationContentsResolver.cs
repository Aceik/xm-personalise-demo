using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.Data;
using Sitecore.Diagnostics;
using Sitecore.Abstractions;
using Sitecore.DependencyInjection;
using Sitecore.Data.Items;
using Sitecore.Mvc.Presentation;
using Sitecore.LayoutService.Configuration;
using Sitecore.XA.Foundation.Abstractions;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.XA.Foundation.SitecoreExtensions.Repositories;
using SUGCON.Demo.SitecoreExtensions.Models;

namespace SUGCON.Demo.SitecoreExtensions.ContentsResolvers
{
    public class NavigationContentsResolver : RenderingContentsResolver
    {

        private readonly BaseLinkManager _linkManager;
        private IContentRepository _contentRepository;
        private IContext _context { get; }

        public NavigationContentsResolver()
        {
            _linkManager = ServiceProviderServiceExtensions.GetService<BaseLinkManager>(ServiceLocator.ServiceProvider);
            _contentRepository = ServiceProviderServiceExtensions.GetService<IContentRepository>(ServiceLocator.ServiceProvider);
            _context = ServiceProviderServiceExtensions.GetService<IContext>(ServiceLocator.ServiceProvider);
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            Assert.ArgumentNotNull((object)rendering, nameof(rendering));
            Assert.ArgumentNotNull((object)renderingConfig, nameof(renderingConfig));

            Item navigationRoot = _contentRepository.GetItem(Templates._Navigable.NavigationRoot);

            if (navigationRoot == null)
            {
                return (object)null;
            }

            JObject jobject = new JObject()
            {
                ["items"] = (JToken)new JArray()
            };

            // First page under our site root should be Home

            int intNavDepth = 1;            

            var navItems = GetNavigation(navigationRoot, intNavDepth);

            if (navItems == null || navItems.Count() == 0)
            {
                return (object)jobject;
            }

            return new { navs = navItems };
        }

        /// <summary>
        /// Return matching items list
        /// </summary>
        /// <param name="parent"></param>       
        /// <param name="depth"></param>
        /// <returns></returns>
        private List<NavigationItem> GetNavigation(Item parent, int depth)
        {
            var navItems = new List<NavigationItem>();

            if (parent == null)
            {
                Log.Info("NavigationContentResolver: Navigation root is not set.", typeof(NavigationContentsResolver));
                return navItems;
            }            

            // First page under our site root should be Home
            if (IsNavigable(parent))
            {
                navItems.Add(new NavigationItem
                {
                    Id = parent.ID,
                    Url = _linkManager.GetItemUrl(parent),
                    NavigationTitle = parent.DisplayName
                });
            }

            depth--;

            // Get the child nav items
            var childNavItems = parent.Children.Where(n => IsNavigable(n))
                                .Select(item =>
                                    new NavigationItem
                                    {
                                        Id = item.ID,
                                        Url = _linkManager.GetItemUrl(item),
                                        NavigationTitle = item.DisplayName,
                                        Children = (depth > 0) ? GetNavigation(item, depth) : new List<NavigationItem>()
                                    });

            if (childNavItems != null && childNavItems.Count() > 0)
            {
                navItems.AddRange(childNavItems);
            }

            return navItems;
        }

        private bool IsNavigable(Item item) => ((ICollection<ID>)_contentRepository.GetBaseTemplates(item.TemplateID, item.Database)).Contains(Templates._Navigable.TemplateId);

    }
}
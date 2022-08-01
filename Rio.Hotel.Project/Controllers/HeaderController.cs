using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Glass.Mapper.Sc.Web.Mvc;
using Rio.Hotel.Project.Models;
using Sitecore.Kernel;
using Sitecore.Data.Items;
using Sitecore.Links.UrlBuilders;
using Sitecore.Mvc.Presentation;
using Sitecore.Data.Fields;

namespace Rio.Hotel.Project.Controllers
{
    public class HeaderController : Controller
    {
        IMvcContext _mvcContext;
        public HeaderController()
        {
            _mvcContext = new MvcContext();
        }

        public ActionResult Index()
        {
            var model = _mvcContext.GetDataSourceItem<Header>();
            if(model == null)
                return View();
            model.HeaderNavigation = GetHeaderNavigation();

            return View("~/Views/Rio/Common/Header.cshtml", model);
        }

        public ActionResult HeaderContent()
        {
            var model= _mvcContext.GetDataSourceItem<HeaderContent>();
            return View("~/Views/Rio/Common/HeaderContent.cshtml", model);
        }

        public ActionResult PageTitle()
        {
            var model=_mvcContext.GetPageContextItem<_BasePage>();
            return View("~/Views/Rio/Common/PageTitle.cshtml", model);
        }

        private HeaderNavigation GetHeaderNavigation()
        {
            var headerNavigation = new HeaderNavigation();
            List<Navigation> navigations = new List<Navigation>();

            //read the tree // build a navigation
            var startitemPath = Sitecore.Context.Site.StartPath;
            var homeItem = Sitecore.Context.Database.GetItem(startitemPath);
            navigations.Add(GetNavigation(homeItem));

            if (homeItem.HasChildren)
            {
                foreach (Item child in homeItem.Children)
                {
                    var navigation = GetNavigation(child);
                    if (navigation != null)
                        navigations.Add(navigation);
                }
            }

            return new HeaderNavigation()
            {
                TopNavigations = navigations
            };
        }

        private Navigation GetNavigation(Item item)
        {
            if (item != null)
            {
                var showInNavigation = (CheckboxField)item.Fields[new Sitecore.Data.ID("{4B1AD02C-4F79-4246-AB6E-49CA483D2595}")];
                if (showInNavigation == null || !showInNavigation.Checked)
                {
                    return null;
                }

                DefaultItemUrlBuilderOptions defaultItemUrlBuilderOptions = new DefaultItemUrlBuilderOptions();
                ItemUrlBuilder itemUrlBuilder = new ItemUrlBuilder(defaultItemUrlBuilderOptions);

                return new Navigation()
                {
                    NavigationTitle = item.Fields[new Sitecore.Data.ID("{1A05731F-98C0-49BB-9BDA-F42FB8957A7F}")]?.Value,
                    NavigationLink = itemUrlBuilder.Build(item, defaultItemUrlBuilderOptions),
                    ActiveClass = PageContext.Current.Item.ID == item.ID ? "active" : string.Empty
                };
            }
            return null;
        }
    }
}
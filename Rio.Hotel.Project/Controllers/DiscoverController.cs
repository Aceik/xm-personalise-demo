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
    public class DiscoverController : Controller
    {
        IMvcContext _mvcContext;
        public DiscoverController()
        {
            _mvcContext = new MvcContext();
        }

        // GET: Discover
        public ActionResult Discover()
        {
            var model = _mvcContext.GetDataSourceItem<Discover>();
            return View("~/Views/Rio/Discover/Discover.cshtml", model);
        }
    }
}
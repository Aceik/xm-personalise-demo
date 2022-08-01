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
    public class ServicesSectionController : Controller
    {
        IMvcContext _mvcContext;
        public ServicesSectionController()
        {
            _mvcContext = new MvcContext();
        }
        public ActionResult Index()
        {
            var model = _mvcContext.GetDataSourceItem<HotelServices>();
            return View("~/Views/Rio/Services/Services.cshtml", model);
        }

        public ActionResult ServicePageContent()
        {
            var model = _mvcContext.GetPageContextItem<ServicesPage>();
            return View("~/Views/Rio/Services/ServicesPageContent.cshtml", model);
        }
    }
}
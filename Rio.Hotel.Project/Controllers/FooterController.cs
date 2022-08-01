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
    public class FooterController : Controller
    {
        IMvcContext _mvcContext;
        public FooterController()
        {
            _mvcContext = new MvcContext();
        }

        public ActionResult Index()
        {
            var model = _mvcContext.GetDataSourceItem<Footer>();
            return View("~/Views/Rio/Common/Footer.cshtml", model);
        }
    }
}
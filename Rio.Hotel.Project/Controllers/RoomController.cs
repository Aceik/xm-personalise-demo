using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Mvc.Presentation;
using Glass.Mapper.Sc.Web.Mvc;
using Rio.Hotel.Project.Models;

namespace Rio.Hotel.Project.Controllers
{
    public class RoomController : Controller
    {
        IMvcContext _mvcContext;
        public RoomController()
        {
            _mvcContext = new MvcContext();
        }
        // GET: Room
        public ActionResult RoomCarousel()
        {
            var model = _mvcContext.GetDataSourceItem<RoomCarousel>();

            return View("~/Views/Rio/Room/RoomCarousel.cshtml", model);
        }

        public ActionResult RoomDetails()
        {
            var model = _mvcContext.GetPageContextItem<Room>();

            return View("~/Views/Rio/Room/RoomDetails.cshtml", model);
        }
    }
}
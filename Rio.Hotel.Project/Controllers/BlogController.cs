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
    public class BlogController : Controller
    {
        IMvcContext _mvcContext;
        public BlogController()
        {
            _mvcContext = new MvcContext();
        }

        // GET: Blog
        public ActionResult BlogPostContent()
        {
            var model = _mvcContext.GetPageContextItem<BlogPost>();
            return View("~/Views/Rio/Blog/BlogPostContent.cshtml", model);
        }

        public ActionResult BlogList()
        {
            var model = _mvcContext.GetDataSourceItem<BlogList>();
            if (model != null)
            {
                //skip 0 index
                for (int index = 1; index < model.BlogPosts.Count(); index++)
                {                    
                    if (index == 1)
                    {
                        model.BlogPosts.ElementAt(index).ClassName = "space-right";
                    }
                    else if (index == 2)
                    {
                        model.BlogPosts.ElementAt(index).ClassName = "space-left";
                    }
                    else if (index == 3)
                    {
                        model.BlogPosts.ElementAt(index).ClassName = "space-right space-top";
                    }
                    else if (index == 4)
                    {
                        model.BlogPosts.ElementAt(index).ClassName = "space-left space-top";
                    }
                }
            }
            return View("~/Views/Rio/Blog/BlogList.cshtml", model);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Rio.Hotel.Project.Models
{
    public class HeaderNavigation
    {
        public List<Navigation> TopNavigations { get; set; }
    }
    public class Navigation
    {
        public string NavigationTitle { get; set; }
        public string NavigationLink { get; set; }
        public string ActiveClass { get; set; }
    }
}
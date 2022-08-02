using Sitecore.Data;
using System.Collections.Generic;

namespace SUGCON.Demo.SitecoreExtensions.Models
{
    public class NavigationItem
    {
        public ID Id { get; set; }
        public string Url { get; set; }
        public string NavigationTitle { get; set; }
        public List<NavigationItem> Children { get; set; }
    }
}
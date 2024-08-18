using Microsoft.AspNetCore.Mvc;

namespace UtilityApp.Controllers
{
    public class AccountingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

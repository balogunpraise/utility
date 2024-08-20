using Microsoft.AspNetCore.Mvc;

namespace UtilityApp.Controllers
{
    public class TodoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

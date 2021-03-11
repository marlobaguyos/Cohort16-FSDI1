using Microsoft.AspNetCore.Mvc;

namespace taskManager.Controllers
{
    public class Apicontroller : Controller
    {
        public Apicontroller()
        {
            //I'm the constructor
        }
        [HttpGet]
        public IActionResult Test()
        {
            string name = "Sergio";
            return Json(name);
        }
        [HttpGet]
        public IActionResult GetTask()
        {
            return Json(null);
        }
        [HttpPost]
        public IActionResult PostTask()
        {
            return Json(null);
        }
    }
}
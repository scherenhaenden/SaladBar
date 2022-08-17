using Microsoft.AspNetCore.Mvc;

namespace SaladBarBackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class DockerController : Controller
{
    // GET
    [HttpGet(Name = "GetIndex")]
    public string Index()
    {
        return "Hello DockerController!";
    }
}
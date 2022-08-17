using Microsoft.AspNetCore.Mvc;
using SaladBarBackend.DockerLib.Abstraction;

namespace SaladBarBackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class DockerController : Controller
{
    private readonly IDockerCommands _dockerCommands;

    public DockerController(IDockerCommands dockerCommands)
    {
        _dockerCommands = dockerCommands;
    }

    // GET
    [HttpGet(Name = "GetIndex")]
    public string Index()
    {
        return "Hello DockerController!";
    }
    
    // GET List of all docker images  
    [HttpGet]
    [Route("GetImages")]
    public async Task<List<DockerImageModel>> GetImages()
    {
        return await _dockerCommands.GetImages();
    }
}
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
    
    [HttpGet]
    [Route("GetVolumes")]
    public async Task<List<DockerVolumesModel>> GetVolumes()
    {
        return await _dockerCommands.GetVolumes();
    }
    
    [HttpGet]
    [Route("GetNetworks")]
    public async Task<List<DockerNetworkModel>> GetNetworks()
    {
        return await _dockerCommands.GetNetworks();
    }
    
    [HttpGet]
    [Route("GetContainers")]
    public async Task<List<DockerContainersModel>> GetContainers()
    {
        return await _dockerCommands.GetContainers();
    }
}
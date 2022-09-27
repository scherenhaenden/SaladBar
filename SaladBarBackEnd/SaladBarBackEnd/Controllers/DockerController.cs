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
    [Route("GetImagesWithoutParentId")]
    public async Task<List<DockerImageModel>> GetImagesWithoutParentId()
    {
        return (await _dockerCommands.GetImages()).Where(x=>String.IsNullOrWhiteSpace(x.ParentId)).ToList();
    }
    
    [HttpGet]
    [Route("GetImagesDangling")]
    public async Task<List<DockerImageModel>> GetImagesDangling()
    {
        return (await _dockerCommands.GetImages()).Where(x=>x.RepoTags[0] == "<none>:<none>").ToList();
    }
    
    [HttpGet]
    [Route("DeleteAllImagesDanling")]
    public async Task<bool> DeleteAllImagesDanling()
    {
        await _dockerCommands.DeleteDanglingImages();
        return true;
    }
    
    [HttpGet]
    [Route("DeleteAllImagesWithoutParentId")]
    public async Task<bool> DeleteAllImagesWithoutParentId()
    {
        await _dockerCommands.DeleteImagesWithoutParentId();
        return true;
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
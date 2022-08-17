using System.Diagnostics;
using Docker.DotNet;
using Docker.DotNet.Models;

namespace SaladBarBackend.DockerLib.Abstraction;

public interface IDockerCommands
{
    void RunTests();
    
    // Get Docker Images
    Task<List<DockerImageModel>> GetImages();
}

public class DockerCommands: IDockerCommands
{
   // Create Method to check if Docker is installed
   private DockerClient dockerClient;

   private void InitDefaultDockerClient()
   {
       // For later
       /*var dockerClient = new DockerClientConfiguration(
           new Uri("unix:///var/run/docker.sock")
       ).CreateClient();*/
       dockerClient = new DockerClientConfiguration().CreateClient();
   }


   public void RunTests()
   {
       if (dockerClient == null)
       {
           dockerClient = new DockerClientConfiguration().CreateClient();
       }
       
       // Get all Docker images
        var images = dockerClient.Images.ListImagesAsync(new ImagesListParameters()).Result;
        foreach (var image in images)
        {
            Debug.WriteLine(image.RepoTags[0]);
        }

        
        /*dockerClient.Volumes.CreateVolumeAsync(new VolumeCreateParameters
        {
            Name = "saladbar-volume",
            Driver = "local"
        }).Wait();
        //var version = dockerClient.VersionAsync().Result;

        
        
        dockerClient.Containers.CreateContainerAsync(new CreateContainerParameters
        {
            Image = "alpine",
            Cmd = new string[] { "echo", "Hello World" }
        }).Wait();*/

    }

    public async Task<List<DockerImageModel>> GetImages()
    {
        if (dockerClient == null)
        {
            dockerClient = new DockerClientConfiguration().CreateClient();
        }
        
        var images = await dockerClient.Images.ListImagesAsync(new ImagesListParameters());
        var dockerImageModels = new List<DockerImageModel>();
        foreach (var image in images)
        {
            dockerImageModels.Add(ImagesListResponseToDockerImageModel(image));
        }

        return dockerImageModels;

    }

    public DockerImageModel ImagesListResponseToDockerImageModel(ImagesListResponse imagesListResponse)
    {
        var dockerImageModel = new DockerImageModel();
        
        dockerImageModel.Containers =imagesListResponse.Containers;
        dockerImageModel.Created = imagesListResponse.Created;
        dockerImageModel.Id = imagesListResponse.ID;
        dockerImageModel.Labels = imagesListResponse.Labels;
        dockerImageModel.RepoDigests = imagesListResponse.RepoDigests;
        dockerImageModel.RepoTags = imagesListResponse.RepoTags;
        dockerImageModel.SharedSize = imagesListResponse.SharedSize;
        dockerImageModel.Size = imagesListResponse.Size;
        dockerImageModel.VirtualSize = imagesListResponse.VirtualSize;
        dockerImageModel.ParentId = imagesListResponse.ParentID;
        return dockerImageModel;
            
    }
}

public class DockerImageModel
{
    public long Containers { get; set; }
    public string Id { get; set; }
    public DateTime Created { get; set; }
    public IDictionary<string, string> Labels { get; set; }
    public IList<string> RepoDigests { get; set; }
    public IList<string> RepoTags { get; set; }
    public long SharedSize { get; set; }
    public long Size { get; set; }
    public long VirtualSize { get; set; }
    public string ParentId { get; set; }
}
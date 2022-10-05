using System.Diagnostics;
using Docker.DotNet;
using Docker.DotNet.Models;

namespace SaladBarBackend.DockerLib.Abstraction;

public interface IDockerCommands
{
    void RunTests();
    
    // Get Docker Images
    Task<List<DockerImageModel>> GetImages();
    
    Task DeleteImagesWithoutParentId();
    Task DeleteDanglingImages();
    
    Task<List<DockerVolumesModel>> GetVolumes();
    
    Task<List<DockerContainersModel>> GetContainers();
    
    Task<List<DockerNetworkModel>> GetNetworks();
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
   
   // Get Docker Images and create Dockerclient if this is null
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
   
   
   // Delete Images without parent id
    public async Task DeleteImagesWithoutParentId()
     {
          if (dockerClient == null)
          {
                dockerClient = new DockerClientConfiguration().CreateClient();
          }
          
          var images = await dockerClient.Images.ListImagesAsync(new ImagesListParameters());
          var imagesWithoutParentId = images.Where(x => String.IsNullOrWhiteSpace(x.ParentID)).ToList();
          foreach (var image in imagesWithoutParentId)
          {
              try
              {
                  await dockerClient.Images.DeleteImageAsync(image.ID, new ImageDeleteParameters());
              }
              catch (Exception e)
              {
                  string f = e.Message;
              }



          }
     }
   
   
   // Delete Dangling Docker Images and create Dockerclient if this is null
    public async Task DeleteDanglingImages()
     {
          if (dockerClient == null)
          {
                dockerClient = new DockerClientConfiguration().CreateClient();
          }
          
          var images = await dockerClient.Images.ListImagesAsync(new ImagesListParameters());
          foreach (var image in images)
          {
                if (image.RepoTags[0] == "<none>:<none>")
                {
                    try
                    {
                        await dockerClient.Images.DeleteImageAsync(image.ID, new ImageDeleteParameters());
                    }
                    catch (Exception e)
                    {
                        string f = e.Message;
                    }


                }
          }
     }
    
    // Get all Images used by containers
    public async Task<List<DockerImageModel>> GetImagesUsedByContainers()
    {
        if (dockerClient == null)
        {
            dockerClient = new DockerClientConfiguration().CreateClient();
        }
        
        var containers = await dockerClient.Containers.ListContainersAsync(new ContainersListParameters());
        var images = await dockerClient.Images.ListImagesAsync(new ImagesListParameters());
        var dockerImageModels = new List<DockerImageModel>();
        foreach (var container in containers)
        {
            var image = images.FirstOrDefault(x => x.ID == container.ImageID);
            if (image != null)
            {
                dockerImageModels.Add(ImagesListResponseToDockerImageModel(image));
            }
        }

        return dockerImageModels;
    }
    
    

    public async Task<List<DockerVolumesModel>> GetVolumes()
    {
        if (dockerClient == null)
        {
            dockerClient = new DockerClientConfiguration().CreateClient();
        }

        var volumes = await dockerClient.Volumes.ListAsync();
        var dockerVolumesModes = new List<DockerVolumesModel>();
        foreach (var item in volumes.Volumes)
        {
            dockerVolumesModes.Add(VolumesResponseToDockerVolumesModel(item));
        }

        return dockerVolumesModes;
    }

    public async Task<List<DockerContainersModel>> GetContainers()
    {
        if (dockerClient == null)
        {
            dockerClient = new DockerClientConfiguration().CreateClient();
        }

        var containerListResponses = await dockerClient.Containers.ListContainersAsync(new ContainersListParameters());
        var dockerContainersModels = new List<DockerContainersModel>();
        foreach (var item in containerListResponses)
        {
            dockerContainersModels.Add(ContainersListResponseToDockerContainersModel(item));
        }

        return dockerContainersModels;
    }

    public async Task<List<DockerNetworkModel>> GetNetworks()
    {
        if (dockerClient == null)
        {
            dockerClient = new DockerClientConfiguration().CreateClient();
        }

        var networks = await dockerClient.Networks.ListNetworksAsync(new NetworksListParameters());
        var dockerNetworkModels = new List<DockerNetworkModel>();
        foreach (var item in networks)
        {
            dockerNetworkModels.Add(NetworksListResponseToDockerNetworkModel(item));
        }

        return dockerNetworkModels;
    }
    
    public DockerNetworkModel NetworksListResponseToDockerNetworkModel(NetworkResponse item)
    {
        return new DockerNetworkModel
        {
            Id = item.ID,
            Name = item.Name,
            Driver = item.Driver,
            Scope = item.Scope,
            EnableIPv6 = item.EnableIPv6,
            Internal = item.Internal,
            Attachable = item.Attachable,
            Ingress = item.Ingress,
            IPAM = item.IPAM,
            Options = item.Options,
            Labels = item.Labels,
            Containers = item.Containers
        };
        
        
    }

    public DockerContainersModel ContainersListResponseToDockerContainersModel(
        ContainerListResponse item)
    {

        return new DockerContainersModel
        {
            Id = item.ID,
            Names = item.Names,
            Image = item.Image,
            Command = item.Command,
            Created = item.Created,
            Status = item.Status,
            Ports = item.Ports,
            SizeRw = item.SizeRw,
            SizeRootFs = item.SizeRootFs,
            Labels = item.Labels,
            NetworkSettings = item.NetworkSettings,
            Mounts = item.Mounts,
            State = item.State,
            ImageId = item.ImageID,
        };
    }

    public DockerVolumesModel VolumesResponseToDockerVolumesModel(VolumeResponse volumeResponse)
    {

        var volumeUsageDataModel = new VolumeUsageDataModel()
        {
            Size = volumeResponse.UsageData?.Size,
            RefCount = volumeResponse.UsageData?.RefCount
        };
        
        
        return new DockerVolumesModel
        {
            CreatedAt = volumeResponse.CreatedAt,
            Driver = volumeResponse.Driver,
            Labels = volumeResponse.Labels,
            Mountpoint = volumeResponse.Mountpoint,
            Name = volumeResponse.Name,
            Options =volumeResponse.Options,
            Scope = volumeResponse.Scope,
            Status = volumeResponse.Status,
            UsageData = volumeUsageDataModel,
            
        };
        
        
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

public class DockerNetworkModel
{
    public string Id { get; set; }
    public string Name { get; set; }
    
    public string Driver { get; set; }
    public string Scope { get; set; }
    public bool EnableIPv6 { get; set; }
    public bool Internal { get; set; }
    public bool Attachable { get; set; }
    public bool Ingress { get; set; }
    public IPAM IPAM { get; set; }
    public IDictionary<string, string> Options { get; set; }
    public IDictionary<string, string> Labels { get; set; }
    public IDictionary<string, EndpointResource> Containers { get; set; }
        
       
}

public class DockerContainersModel
{
    public string Id { get; set; }
    public IList<string> Names { get; set; }
    public string Image { get; set; }
    public string Command { get; set; }
    public DateTime Created { get; set; }
    public string Status { get; set; }
    public IList<Port> Ports { get; set; }
    public long SizeRw { get; set; }
    public long SizeRootFs { get; set; }
    public IDictionary<string, string> Labels { get; set; }
    public SummaryNetworkSettings NetworkSettings { get; set; }
    public IList<MountPoint> Mounts { get; set; }
    public string State { get; set; }
    public string ImageId { get; set; }
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

public class DockerVolumesModel
{
    public string Name { get; set; }
    public string Driver { get; set; }
    public string Mountpoint { get; set; }
    public string CreatedAt { get; set; }
    public string Scope { get; set; }
    public IDictionary<string, string> Labels { get; set; }
    public IDictionary<string, string> Options { get; set; }
    public IDictionary<string, object> Status { get; set; }
    public VolumeUsageDataModel UsageData { get; set; }
}

public class VolumeUsageDataModel
{
    public long? RefCount { get; set; }
    public long? Size { get; set; }
}

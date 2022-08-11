using System.Diagnostics;
using Docker.DotNet;
using Docker.DotNet.Models;

namespace SaladBarBackend.DockerLib.Abstraction;

public interface IDockerCommands
{
    void RunTests();
}

public class DockerCommands: IDockerCommands
{
   // Create Method to check if Docker is installed
    public void RunTests()
    {
        DockerClient dockerClient = new Docker.DotNet.DockerClientConfiguration().CreateClient();
        
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
}
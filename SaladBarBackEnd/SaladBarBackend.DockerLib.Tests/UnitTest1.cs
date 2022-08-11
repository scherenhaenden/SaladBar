using SaladBarBackend.DockerLib.Abstraction;

namespace SaladBarBackend.DockerLib.Tests;

public class Tests
{
    
    IDockerCommands dockerCommands;
    
    [SetUp]
    public void Setup()
    { 
        dockerCommands = new DockerCommands();
    }

    [Test]
    public void Test1()
    {
        
        dockerCommands.RunTests();
        
        Assert.Pass();
    }
}
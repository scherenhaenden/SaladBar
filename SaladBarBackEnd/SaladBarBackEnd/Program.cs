using SaladBarBackend.DockerLib.Abstraction;
using SaladBarBackEnd.EnviromentConfigs;
using SaladBarBackEnd.Services.Middlewares.Cors;
using SaladBarBackEnd.Services.Middlewares.JWT;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//var appSettingsSection = Configuration.GetSection("AppSettings");
var appSettings = builder.Configuration.GetSection("AppSettings");

builder.Services.Configure<AppSettings>(appSettings);

builder.Services.AddScoped<IDockerCommands, DockerCommands>();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Add Simple cors policy for development.
    app.UseCors(builder => builder
        .AllowAnyHeader()
        .AllowAnyMethod()
        .SetIsOriginAllowed((host) => true)
        .AllowCredentials()
    );
    app.UseCorsMiddleware();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
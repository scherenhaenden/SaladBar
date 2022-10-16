using Microsoft.AspNetCore.Mvc;
using SaladBarBackEnd.Services.Middlewares.JWT;

namespace SaladBarBackEnd.Controllers;

public class LoginV2Controller : Controller
{
    private IUserService _userService;

    
    public LoginV2Controller(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("authenticate")]
    public IActionResult Authenticate(AuthenticateRequest model)
    {
        var response = _userService.Authenticate(model);

        if (response == null)
            return BadRequest(new { message = "Username or password is incorrect" });

        return Ok(response);
    }

    [Authorize]
    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }
}
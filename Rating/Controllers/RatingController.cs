using Microsoft.AspNetCore.Mvc;
using Rating.Models;
using Rating.Services;

namespace Rating.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly RatingService _ratingService;

        public RatingController(RatingService ratingService) => _ratingService = ratingService;

        [HttpGet]
        public async Task<List<RatingEntity>> Get() => await _ratingService.GetAsync();

        //[HttpGet("{id:length(1)}")]
        //public async Task<ActionResult<RatingEntity>> Get(string id)
        //{
        //    var employee = await _ratingService.GetAsync(id);

        //    if (employee is null)
        //    {
        //        return NotFound();
        //    }

        //    return employee;
        //}

        [HttpPost]
        public async Task<IActionResult> Post(RatingEntity newEmployee)
        {
            await _ratingService.CreateAsync(newEmployee);

            return NoContent();
        }

    }
}

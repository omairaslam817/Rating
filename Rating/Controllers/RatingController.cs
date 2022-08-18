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


        [HttpPost]
        public async Task<IActionResult> Post(RatingEntity rating)
        {
            await _ratingService.CreateAsync(null);

            return NoContent();
        }

    }
}

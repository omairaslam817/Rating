using Microsoft.AspNetCore.Mvc;
using Rating.Models;
using Rating.Services;

namespace Rating.Controllers
{
    public class RatingController : Controller
    {
        private readonly RatingService _ratingService;

        public RatingController(RatingService ratingService)
        {
            _ratingService = ratingService;
        }
        [HttpGet]
        public async Task<List<RatingEntity>> Get() => await _ratingService.GetAsync();

        [HttpPost]
        public async Task<IActionResult> Post(RatingEntity newEmployee)
        {
            await _ratingService.CreateAsync(newEmployee);

            return Ok();
        }
    }
}

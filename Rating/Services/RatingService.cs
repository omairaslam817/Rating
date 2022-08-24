using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Rating.Models;

namespace Rating.Services
{
    public class RatingService
    {
        private readonly IMongoCollection<RatingEntity> _ratingCollection;

        public RatingService(
            IOptions<MongoDBSettings> dabaseSettings)
        {
            var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);

            _ratingCollection = mongoDatabase.GetCollection<RatingEntity>("MyRating");
        }

        public async Task<List<RatingEntity>> GetAsync()
        {
            try
            {
              return  await _ratingCollection.Find(_ => true).ToListAsync();

            }
            catch (Exception ex)
            {

                throw;
            }
        }


        public async Task CreateAsync(RatingEntity rating) =>
            await _ratingCollection.InsertOneAsync(rating);


    }
}

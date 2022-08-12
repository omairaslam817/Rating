using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Rating.Models;

namespace Rating.Services
{
    public class RatingService
    {
        private readonly IMongoCollection<RatingEntity> _employeeCollection;

        public RatingService(
            IOptions<MongoDBSettings> dabaseSettings)
        {
            var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);

            _employeeCollection = mongoDatabase.GetCollection<RatingEntity>("MyRating");
        }

        public async Task<List<RatingEntity>> GetAsync() =>
            await _employeeCollection.Find(_ => true).ToListAsync();

        //public async Task<RatingEntity?> GetAsync(string id) =>
        //    await _employeeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(RatingEntity newEmployee) =>
            await _employeeCollection.InsertOneAsync(newEmployee);


    }
}

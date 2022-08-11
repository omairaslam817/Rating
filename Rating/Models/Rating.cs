using MongoDB.Bson.Serialization.Attributes;

namespace Rating.Models
{
    public class RatingEntity
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("comment")]
        public string? Comment { get; set; }
        [BsonElement("rating")]
        public int Rating { get; set; }
    }
}

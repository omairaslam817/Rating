using Rating.Models;
using Rating.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<RatingService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var AllowedOrigins = "AllowedOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowedOrigins,
                          builder =>
                          {
                              builder.WithOrigins("http://localhost:4200")
                                                  .AllowAnyMethod()
                                                                   .AllowCredentials()
                                                                    .AllowAnyHeader();
                          });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.UseCors(AllowedOrigins);

app.Run();

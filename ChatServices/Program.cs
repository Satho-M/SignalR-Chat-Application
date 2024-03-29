using ChatServices.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddCors(option =>
{
    option.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

builder.Services.AddSingleton<IDictionary<string, UserConnection>>(option => new Dictionary<string, UserConnection>());

var app = builder.Build();

app.UseRouting();
app.UseCors();

app.MapHub<ChatHub>("/chat");

app.Run();

using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using TeamSync.Controllers;
using TeamSync.Data;
using TeamSync.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TeamSyncDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TeamSyncDbContext") ??
    throw new InvalidOperationException("Connection string 'TeamSyncDbContext' not found.")));

// Add application part for controllers
builder.Services.AddControllers()
    .AddApplicationPart(typeof(CompanyController).Assembly)
    .AddControllersAsServices();
builder.Services.AddControllers()
    .AddApplicationPart(typeof(EmployeeController).Assembly)
    .AddControllersAsServices();
builder.Services.AddControllers()
    .AddApplicationPart(typeof(DepartmentController).Assembly)
    .AddControllersAsServices();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
    options.JsonSerializerOptions.MaxDepth = 32;
});

builder.Services.AddScoped<CompanyService>();
builder.Services.AddScoped<EmployeeService>();
builder.Services.AddScoped<DepartmentService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
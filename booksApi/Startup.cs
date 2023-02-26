using booksApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
namespace booksApi
{
    public static class Startup
    {
       
        public static WebApplication InitializeApp( string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            ConfigureServices(builder);
            var app = builder.Build();
            Configure(app);
            return app;
        }
    
        private static void ConfigureServices(WebApplicationBuilder builder)
        {
            builder.Services.AddControllers();
            
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            {
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options => options.AddPolicy(name: "BookApi",
            policy => {
                policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
            }
            ));
        }
    
        private static void Configure(WebApplication app)
        {
                
                
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("BookApi");
            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();
        }
    }
}
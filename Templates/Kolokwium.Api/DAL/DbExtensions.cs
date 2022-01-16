using Microsoft.Extensions.DependencyInjection;
using Kolokwium.Api.Model;

namespace Kolokwium.Api.DAL {
    public static class DbExtensions {
        public static void SeedData (this IServiceCollection serviceCollection) {
            var serviceProvider = serviceCollection.BuildServiceProvider ();
            var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext> ();
            dbContext.AddRange (
            
                 new Author () {
                     Id = 1,
                        FirstName = "AA",
                         LastName = "BB"
                },
                 new Author () {
                    Id = 2,
                        FirstName = "CCCAA",
                        LastName = "CCCBB"
                 }
            );
            dbContext.SaveChanges ();
        }
    }
}
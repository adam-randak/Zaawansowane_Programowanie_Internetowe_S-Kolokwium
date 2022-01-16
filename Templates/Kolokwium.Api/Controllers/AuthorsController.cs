using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Model;
using System.Threading.Tasks;

namespace Kolokwium.Api.Controllers
{

    [ApiController]
    [Route("[Controller]")]
    public class AuthorsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public AuthorsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAuthors()
        {

            var list = await dbContext.Authors.ToListAsync();
            return Ok(list);

        }


        [HttpGet("{id}", Name = "GetAuthor")]
        public async Task<IActionResult> GetAuthor(int id)
        {

            var author = await dbContext.Authors.SingleOrDefaultAsync(a => a.Id == id);
            if (author is null)
            {
                return NotFound($"Nie znaleziono autora o id = {id}");
            }
            return Ok(author);


        }
        [HttpPost]
        public async Task<IActionResult> PostAuthor(Author author)
        {

            await dbContext.Authors.AddAsync(author);

            await dbContext.SaveChangesAsync();

            return Ok(CreatedAtAction(nameof(GetAuthor), new { id = author.Id }));

        }



        [HttpPut]
        public async Task<ActionResult> PutAuthor(int id, Author author)
        {
            var authorfind = await dbContext.Authors.FindAsync(id);

            dbContext.Authors.Update(author);

            await dbContext.SaveChangesAsync();

            return Ok();

        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAuthor(int id)
        {


            var author = await dbContext.Authors.FindAsync(id);


            dbContext.Authors.Remove(author);

            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
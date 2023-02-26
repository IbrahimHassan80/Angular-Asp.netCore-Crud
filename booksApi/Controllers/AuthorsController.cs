using booksApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace booksApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AuthorsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AuthorsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuthors(){
            var author = await _context.Authors.ToListAsync();
            return Ok(author);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOneAuthor([FromRoute] int id){
            var author = await _context.Authors.FindAsync(id);
            if(author != null)
            {
                return Ok(author);
            }
           return NotFound("Author Not Found"); 
        }

        [HttpPost]
        public async Task<IActionResult> AddAuthor([FromBody] Author author)
        {
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
            return Ok(await _context.Authors.ToListAsync());
        }

         [HttpPut]
        public async Task<IActionResult> UpdateAuthor([FromBody] Author author)
        {
            var dbauthor = await _context.Authors.FindAsync(author.Id);
            if( dbauthor == null)
                return BadRequest("Book Not Found");

            dbauthor.Name = author.Name;
            dbauthor.Category = author.Category;
            dbauthor.Age = author.Age;

            await _context.SaveChangesAsync();
            return Ok(await _context.Authors.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAuthor(int id){
            var dbAuthor = await _context.Authors.FindAsync(id);
            if(dbAuthor != null) 
            {
                _context.Authors.Remove(dbAuthor);
                await _context.SaveChangesAsync();
                return Ok(await _context.Authors.ToListAsync());
            }
            return NotFound("Author not found !");
        }
    
    }
}
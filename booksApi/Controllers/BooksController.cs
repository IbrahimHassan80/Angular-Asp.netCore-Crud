using booksApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace booksApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    

    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public BooksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            return Ok(await _context.Books.ToListAsync());
        }
    
        [HttpPost]
        public async Task<ActionResult<List<Book>>> CreateBook(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }
    
        [HttpPut]
        public async Task<ActionResult<List<Book>>> UpdateBook(Book book)
        {
            var dbBook = await _context.Books.FindAsync(book.Id);
            if( dbBook == null)
                return BadRequest("Book Not Found");

            dbBook.Title = book.Title;
            dbBook.Author = book.Author;
            dbBook.NumberOfPages = book.NumberOfPages;
            dbBook.PublishedAt = book.PublishedAt;
            
            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }
    
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Book>>> DeleteBook(int id)
        {
            var dbBook = await _context.Books.FindAsync(id);
            if( dbBook == null)
                return BadRequest("Book Not Found");

            _context.Books.Remove(dbBook);
            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }
    }
}
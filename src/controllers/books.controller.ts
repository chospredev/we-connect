import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { BookDTO } from 'src/model/book.dto';
import { BooksService } from 'src/providers/books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Get()
    async getBooks() {
        return await this.bookService.getAll();
    }

    @Get('/:id')
    async getBook(@Param('id') id) {
        return await this.bookService.getOne(id);
    }

    @Post()
    insertBook(@Body() bookDto: BookDTO) {
        return this.bookService.insertBook(bookDto);
    }

    @Patch('/:id')
    async updateBook(@Res() res, @Param('id') id, @Body() bookDto: BookDTO) {
        const book = await this.bookService.updateBook(id, bookDto);
        res.json({
            book
        })
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: number) {
        this.bookService.removeBook(id);
    }

}

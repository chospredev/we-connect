import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { BookDTO } from 'src/model/book.dto';
import { BooksService } from 'src/providers/books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Get()
    @ApiResponse({ status: 200, description: "Success: Fetched book list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    async getBooks() {
        return await this.bookService.getAll();
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: "Success: Fetched book successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    async getBook(@Param('id') id) {
        return await this.bookService.getOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: "Success: Inserted book into the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    @ApiBody({ type: [BookDTO] })
    insertBook(@Body() bookDto: BookDTO) {
        return this.bookService.insertBook(bookDto);
    }

    @Patch('/:id')
    @ApiResponse({ status: 200, description: "Success: Updated book from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    @ApiBody({ type: [BookDTO] })
    async updateBook(@Res() res, @Param('id') id, @Body() bookDto: BookDTO) {
        const book = await this.bookService.updateBook(id, bookDto);
        res.json({
            book
        })
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: "Success: Deleted book from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    deleteBook(@Param('id') id: number) {
        this.bookService.removeBook(id);
    }

}

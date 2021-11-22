import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { BookDTO } from 'src/model/book.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>
    ) {}

    async getAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async getOne(id: number): Promise<Book> {
        return this.bookRepository.findOne({ where: { id } });
    }

    insertBook(book: Book): Promise<Book> {
        return this.bookRepository.save(book);
    }

    async updateBook(id: number, data: BookDTO): Promise<Book | null> {
        const book = await this.bookRepository.findOneOrFail(id);
        if(!book.id) throw new Error("Book not found.");
        await this.bookRepository.update(id, data);
        return await this.bookRepository.findOne({ where: { id } });
    }

    removeBook(id: number) {
        return this.bookRepository.delete(id);
    }
}

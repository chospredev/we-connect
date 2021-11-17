import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { BooksController } from '../controllers/books.controller';
import { BooksService } from '../providers/books.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule {}

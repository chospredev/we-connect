import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../providers/app.service';
import { BooksModule } from '../modules/books.module';
import { Book } from '../entities/book.entity';
import { Movie } from 'src/entities/movie.entity';
import { MoviesModule } from './movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'K3rim123',
      database: 'postgres',
      entities: [Book, Movie],
      synchronize: true,
    }),
    BooksModule,
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

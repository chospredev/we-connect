import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from 'src/controllers/movies.controller';
import { Movie } from 'src/entities/movie.entity';
import { MoviesService } from 'src/providers/movies.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movie])
    ],
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MoviesModule {}

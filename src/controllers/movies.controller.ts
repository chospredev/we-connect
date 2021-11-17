import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MovieDTO } from "src/model/movie.dto";
import { MoviesService } from "src/providers/movies.service";

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getMovies() {
        return this.movieService.getMovies();
    }

    @Get('/:id')
    getMovie(@Param('id') id) {
        return this.movieService.getMovie(id);
    }

    @Post()
    addMovie(@Body() moviesDto: MovieDTO) {
        return this.movieService.addMovie(moviesDto);
    }

    @Patch('/:id')
    updateMovie(@Param('id') id, @Body() movieDto: MovieDTO) {
        this.movieService.updateMovie(id, movieDto);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') id) {
        this.movieService.deleteMovie(id);
    }
}
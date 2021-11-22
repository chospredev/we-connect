import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { MovieDTO } from "src/model/movie.dto";
import { MoviesService } from "src/providers/movies.service";

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

    @Get()
    @ApiResponse({ status: 200, description: "Success: Fetched movies from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    getMovies() {
        return this.movieService.getMovies();
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: "Success: Fetched movie from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    getMovie(@Param('id') id) {
        return this.movieService.getMovie(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: "Success: Inserted movie into the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    @ApiBody({ type: [MovieDTO] })
    addMovie(@Body() moviesDto: MovieDTO) {
        return this.movieService.addMovie(moviesDto);
    }

    @Patch('/:id')
    @ApiResponse({ status: 200, description: "Success: Updated movie from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    @ApiBody({ type: [MovieDTO] })
    updateMovie(@Param('id') id, @Body() movieDto: MovieDTO) {
        this.movieService.updateMovie(id, movieDto);
    }

    @Delete('/:id')
    @ApiResponse({ status: 200, description: "Success: Deleted movie from the list successfully." })
    @ApiResponse({ status: 400, description: "Error: Bad request provided" })
    @ApiResponse({ status: 500, description: "Error: Internal server error" })
    @ApiResponse({ status: 404, description: "Error: Does not exist." })
    deleteMovie(@Param('id') id) {
        this.movieService.deleteMovie(id);
    }
}
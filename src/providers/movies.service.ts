import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/entities/movie.entity";
import { MovieDTO } from "src/model/movie.dto";
import { Repository } from "typeorm";

@Injectable()
export class MoviesService {
    constructor(@InjectRepository(Movie)
     private moviesRepository: Repository<Movie>) {}

    async getMovies(): Promise<Movie[]> {
        return await this.moviesRepository.find();
    }

    async getMovie(id: number): Promise<Movie> {
        return await this.moviesRepository.findOne({ where: { id } });
    }

    async addMovie(movie: Movie): Promise<Movie> {
        return this.moviesRepository.save(movie);
    }

    async updateMovie(id: number, movie: MovieDTO): Promise<Movie> {
        const movieExists = this.moviesRepository.findOneOrFail(id);
        if(!movieExists) throw new Error('Movie doesn\'t exist.');
        await this.moviesRepository.update(id, movie);
        return await this.moviesRepository.findOne(id);
    }

    async deleteMovie(id: number) {
        return this.moviesRepository.delete(id);
    }
}
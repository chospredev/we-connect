import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    date: Date
}
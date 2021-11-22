import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        nullable: true
    })
    genre: string;

    @Column()
    author: string;

    @CreateDateColumn({
        nullable: true
    })
    date: Date
}
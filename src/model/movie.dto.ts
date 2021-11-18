import { ApiProperty } from "@nestjs/swagger";

export class MovieDTO {

    @ApiProperty({
        description: "Self-incrementable id which generates on movie insertion.",
        minimum: 1,
        type: Number
    })
    id: number;

    @ApiProperty({
        description: "Title of the particular movie.",
        type: String
    })
    title: string;

    @ApiProperty({
        description: "Description of the particular movie."
    })
    description: string;

    @ApiProperty({
        description: "Author of the particular movie.",
        type: String
    })
    author: string;

    @ApiProperty({
        description: "Date of the movie added.",
        type: Date
    })
    date: Date
}
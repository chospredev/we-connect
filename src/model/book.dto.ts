import { ApiProperty } from "@nestjs/swagger";

export class BookDTO {
    @ApiProperty({
        description: "Self-incrementable id which generates on book insertion.",
        minimum: 1,
        type: Number
    })
    id!: number;

    @ApiProperty({
        description: "Title of the particular book.",
        type: String
    })
    title: string;

    @ApiProperty({
        description: "Book author of the particular book.",
        type: String
    })
    author: string;

    @ApiProperty({
        description: "Date of the book added.",
        type: Date
    })
    date?: Date
}
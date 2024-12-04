import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: 'test 123',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: 'test@gmail.com',
        required: true
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
}

import { IsString,MinLength } from 'class-validator';

export class CreateActivityDto {

    @IsString()
    @MinLength(1)
    title: string;
  
    @IsString()
    @MinLength(1)
    desc: string;

    @IsString()
    date: string;

    @IsString()
    time: string;

    @IsString()
    img: string;
}
import { IsOptional,IsString,MinLength } from 'class-validator';

export class UpdateActividadesDto {

    @IsString()
    @MinLength(1)
    @IsOptional()
    title?: string;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    desc?: string;

    @IsString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    time?: string;

    @IsString()
    @IsOptional()
    img?: string;
}

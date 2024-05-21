import { PartialType } from '@nestjs/mapped-types';
import { CreateMediaDto } from './create-media.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMediaDto extends PartialType(CreateMediaDto) {
    @IsNotEmpty()
    @IsNumber()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    note: string;
}

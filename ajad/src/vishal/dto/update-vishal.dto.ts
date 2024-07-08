import { PartialType } from '@nestjs/mapped-types';
import { CreateVishalDto } from './create-vishal.dto';

export class UpdateVishalDto extends PartialType(CreateVishalDto) {}

import { Injectable } from '@nestjs/common';
import { CreateVishalDto } from './dto/create-vishal.dto';
import { UpdateVishalDto } from './dto/update-vishal.dto';

@Injectable()
export class VishalService {
  create(createVishalDto: CreateVishalDto) {
    return 'This action adds a new vishal';
  }

  
  findAll() {
    return `This action returns all vishal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vishal`;
  }

  update(id: number, updateVishalDto: UpdateVishalDto) {
    return `This action updates a #${id} vishal`;
  }

  remove(id: number) {
    return `This action removes a #${id} vishal`;
  }
}

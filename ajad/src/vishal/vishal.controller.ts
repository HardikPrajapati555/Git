import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VishalService } from './vishal.service';
import { CreateVishalDto } from './dto/create-vishal.dto';
import { UpdateVishalDto } from './dto/update-vishal.dto';

@Controller('vishal')
export class VishalController {
  constructor(private readonly vishalService: VishalService) {}

  @Post()
  create(@Body() createVishalDto: CreateVishalDto) {
    return this.vishalService.create(createVishalDto);
  }

  @Get()
  findAll() {
    return this.vishalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vishalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVishalDto: UpdateVishalDto) {
    return this.vishalService.update(+id, updateVishalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vishalService.remove(+id);
  }
}

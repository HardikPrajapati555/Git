import { Module } from '@nestjs/common';
import { VishalService } from './vishal.service';
import { VishalController } from './vishal.controller';

@Module({
  controllers: [VishalController],
  providers: [VishalService],
})
export class VishalModule {}

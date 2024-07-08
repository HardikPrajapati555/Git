import { Module } from '@nestjs/common';import { BookModule } from './book/book.module';
import { VishalModule } from './vishal/vishal.module';
;

@Module({
  imports: [BookModule, VishalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

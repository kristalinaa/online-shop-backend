import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';

@Module({
  exports: [CategoryService],
  controllers: [CategoryController],
  providers: [CategoryService,CategoryRepository],
})
export class CategoryModule {}

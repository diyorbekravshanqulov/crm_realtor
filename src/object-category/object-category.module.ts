import { Module } from '@nestjs/common';
import { ObjectCategoryService } from './object-category.service';
import { ObjectCategoryController } from './object-category.controller';

@Module({
  controllers: [ObjectCategoryController],
  providers: [ObjectCategoryService],
})
export class ObjectCategoryModule {}

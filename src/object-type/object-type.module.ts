import { Module } from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { ObjectTypeController } from './object-type.controller';

@Module({
  controllers: [ObjectTypeController],
  providers: [ObjectTypeService],
})
export class ObjectTypeModule {}

import { Module } from '@nestjs/common';
import { ResidentTypeService } from './resident-type.service';
import { ResidentTypeController } from './resident-type.controller';

@Module({
  controllers: [ResidentTypeController],
  providers: [ResidentTypeService],
})
export class ResidentTypeModule {}

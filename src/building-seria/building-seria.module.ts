import { Module } from '@nestjs/common';
import { BuildingSeriaService } from './building-seria.service';
import { BuildingSeriaController } from './building-seria.controller';

@Module({
  controllers: [BuildingSeriaController],
  providers: [BuildingSeriaService],
})
export class BuildingSeriaModule {}

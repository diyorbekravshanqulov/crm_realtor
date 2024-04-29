import { Module } from '@nestjs/common';
import { OwnerCoorparetionService } from './owner-coorparetion.service';
import { OwnerCoorparetionController } from './owner-coorparetion.controller';

@Module({
  controllers: [OwnerCoorparetionController],
  providers: [OwnerCoorparetionService],
})
export class OwnerCoorparetionModule {}

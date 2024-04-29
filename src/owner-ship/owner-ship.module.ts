import { Module } from '@nestjs/common';
import { OwnerShipService } from './owner-ship.service';
import { OwnerShipController } from './owner-ship.controller';

@Module({
  controllers: [OwnerShipController],
  providers: [OwnerShipService],
})
export class OwnerShipModule {}

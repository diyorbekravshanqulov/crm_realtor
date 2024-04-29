import { Module } from '@nestjs/common';
import { ObjectStatusService } from './object-status.service';
import { ObjectStatusController } from './object-status.controller';

@Module({
  controllers: [ObjectStatusController],
  providers: [ObjectStatusService],
})
export class ObjectStatusModule {}

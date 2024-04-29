import { Module } from '@nestjs/common';
import { RenovationService } from './renovation.service';
import { RenovationController } from './renovation.controller';

@Module({
  controllers: [RenovationController],
  providers: [RenovationService],
})
export class RenovationModule {}

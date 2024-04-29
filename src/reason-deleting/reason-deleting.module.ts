import { Module } from '@nestjs/common';
import { ReasonDeletingService } from './reason-deleting.service';
import { ReasonDeletingController } from './reason-deleting.controller';

@Module({
  controllers: [ReasonDeletingController],
  providers: [ReasonDeletingService],
})
export class ReasonDeletingModule {}

import { Module } from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { RealtorController } from './realtor.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RealtorController],
  providers: [RealtorService],
})
export class RealtorModule {}

import { Module } from '@nestjs/common';
import { ResidentTypeService } from './resident-type.service';
import { ResidentTypeController } from './resident-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ResidentTypeController],
  providers: [ResidentTypeService],
})
export class ResidentTypeModule {}

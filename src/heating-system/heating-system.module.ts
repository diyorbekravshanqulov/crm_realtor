import { Module } from '@nestjs/common';
import { HeatingSystemService } from './heating-system.service';
import { HeatingSystemController } from './heating-system.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HeatingSystemController],
  providers: [HeatingSystemService],
})
export class HeatingSystemModule {}

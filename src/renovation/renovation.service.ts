import { Injectable } from '@nestjs/common';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';

@Injectable()
export class RenovationService {
  create(createRenovationDto: CreateRenovationDto) {
    return 'This action adds a new renovation';
  }

  findAll() {
    return `This action returns all renovation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} renovation`;
  }

  update(id: number, updateRenovationDto: UpdateRenovationDto) {
    return `This action updates a #${id} renovation`;
  }

  remove(id: number) {
    return `This action removes a #${id} renovation`;
  }
}

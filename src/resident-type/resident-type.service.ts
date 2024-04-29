import { Injectable } from '@nestjs/common';
import { CreateResidentTypeDto } from './dto/create-resident-type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident-type.dto';

@Injectable()
export class ResidentTypeService {
  create(createResidentTypeDto: CreateResidentTypeDto) {
    return 'This action adds a new residentType';
  }

  findAll() {
    return `This action returns all residentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} residentType`;
  }

  update(id: number, updateResidentTypeDto: UpdateResidentTypeDto) {
    return `This action updates a #${id} residentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} residentType`;
  }
}

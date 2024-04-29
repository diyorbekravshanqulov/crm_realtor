import { Injectable } from '@nestjs/common';
import { CreateOwnerCoorparetionDto } from './dto/create-owner-coorparetion.dto';
import { UpdateOwnerCoorparetionDto } from './dto/update-owner-coorparetion.dto';

@Injectable()
export class OwnerCoorparetionService {
  create(createOwnerCoorparetionDto: CreateOwnerCoorparetionDto) {
    return 'This action adds a new ownerCoorparetion';
  }

  findAll() {
    return `This action returns all ownerCoorparetion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ownerCoorparetion`;
  }

  update(id: number, updateOwnerCoorparetionDto: UpdateOwnerCoorparetionDto) {
    return `This action updates a #${id} ownerCoorparetion`;
  }

  remove(id: number) {
    return `This action removes a #${id} ownerCoorparetion`;
  }
}

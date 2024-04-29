import { Injectable } from '@nestjs/common';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';

@Injectable()
export class OwnerShipService {
  create(createOwnerShipDto: CreateOwnerShipDto) {
    return 'This action adds a new ownerShip';
  }

  findAll() {
    return `This action returns all ownerShip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ownerShip`;
  }

  update(id: number, updateOwnerShipDto: UpdateOwnerShipDto) {
    return `This action updates a #${id} ownerShip`;
  }

  remove(id: number) {
    return `This action removes a #${id} ownerShip`;
  }
}

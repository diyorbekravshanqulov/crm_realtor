import { Injectable } from '@nestjs/common';
import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';

@Injectable()
export class ObjectStatusService {
  create(createObjectStatusDto: CreateObjectStatusDto) {
    return 'This action adds a new objectStatus';
  }

  findAll() {
    return `This action returns all objectStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectStatus`;
  }

  update(id: number, updateObjectStatusDto: UpdateObjectStatusDto) {
    return `This action updates a #${id} objectStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectStatus`;
  }
}

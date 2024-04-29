import { Injectable } from '@nestjs/common';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';

@Injectable()
export class ObjectTypeService {
  create(createObjectTypeDto: CreateObjectTypeDto) {
    return 'This action adds a new objectType';
  }

  findAll() {
    return `This action returns all objectType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectType`;
  }

  update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return `This action updates a #${id} objectType`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectType`;
  }
}

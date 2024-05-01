import { Injectable } from '@nestjs/common';
import { CreateBuildingSeriaDto } from './dto/create-building-seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building-seria.dto';

@Injectable()
export class BuildingSeriaService {
  create(createBuildingSeriaDto: CreateBuildingSeriaDto) {
    return 'This action adds a new buildingSeria';
  }

  findAll() {
    return `This action returns all buildingSeria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingSeria`;
  }

  update(id: number, updateBuildingSeriaDto: UpdateBuildingSeriaDto) {
    return `This action updates a #${id} buildingSeria`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingSeria`;
  }
}

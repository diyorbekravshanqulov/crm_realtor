import { Injectable } from '@nestjs/common';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';

@Injectable()
export class WindowSideService {
  create(createWindowSideDto: CreateWindowSideDto) {
    return 'This action adds a new windowSide';
  }

  findAll() {
    return `This action returns all windowSide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} windowSide`;
  }

  update(id: number, updateWindowSideDto: UpdateWindowSideDto) {
    return `This action updates a #${id} windowSide`;
  }

  remove(id: number) {
    return `This action removes a #${id} windowSide`;
  }
}

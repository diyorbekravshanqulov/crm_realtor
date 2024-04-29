import { Injectable } from '@nestjs/common';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';

@Injectable()
export class ReasonDeletingService {
  create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return 'This action adds a new reasonDeleting';
  }

  findAll() {
    return `This action returns all reasonDeleting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reasonDeleting`;
  }

  update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return `This action updates a #${id} reasonDeleting`;
  }

  remove(id: number) {
    return `This action removes a #${id} reasonDeleting`;
  }
}

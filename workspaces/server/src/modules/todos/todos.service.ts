import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '@server/modules/todos/dto/create-todo.dto';
import { UpdateTodoDto } from '@server/modules/todos/dto/update-todo.dto';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateTodoDto) {
    return this.prismaService.todo.create({ data });
  }

  findAll() {
    return this.prismaService.todo.findMany();
  }

  findOne(id: string) {
    return this.prismaService.todo.findFirst({ where: { id } });
  }

  update(id: string, data: UpdateTodoDto) {
    return this.prismaService.todo.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.todo.delete({ where: { id } });
  }
}

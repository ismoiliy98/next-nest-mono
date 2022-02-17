import { Module } from '@nestjs/common';
import { TodosController } from '@server/modules/todos/todos.controller';
import { TodosService } from '@server/modules/todos/todos.service';
import { PrismaService } from '@server/prisma.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService],
})
export class TodosModule {}

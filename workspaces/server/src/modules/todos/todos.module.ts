import { Module } from '@nestjs/common';
import { TodosController } from '@server/modules/todos/todos.controller';
import { TodosService } from '@server/modules/todos/todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}

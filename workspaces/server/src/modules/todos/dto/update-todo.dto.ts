import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from '@server/modules/todos/dto/create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}

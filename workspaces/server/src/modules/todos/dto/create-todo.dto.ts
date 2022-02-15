import { ITodo } from '@shared/interfaces/todos.interface';
import { Allow, IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto implements Partial<ITodo> {
  @IsString()
  title: string;

  @Allow()
  description?: string;

  @IsBoolean()
  completed: boolean;
}

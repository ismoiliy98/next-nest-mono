import { Prisma } from '@prisma/client';
import { Allow, IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTodoDto implements Prisma.TodoCreateInput {
  @IsString()
  @MinLength(3)
  title: string;

  @Allow()
  description?: string;

  @IsBoolean()
  completed: boolean;
}

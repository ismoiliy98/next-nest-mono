import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumberString,
  IsString,
  validateSync,
} from 'class-validator';

enum Env {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvVars {
  @IsEnum(Env) NODE_ENV: Env;
  @IsNumberString() PORT: string;
  @IsString() APP_NAME: string;
  @IsString() APP_KEY: string;
  @IsString() APP_SECRET: string;
}

export const validateEnv = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvVars, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const missingFields: string[] = [];
    const invalidFields: string[] = [];

    errors.forEach((error) => {
      (typeof error.value === 'undefined' ? missingFields : invalidFields).push(
        error.property,
      );
    });

    let errorMessage =
      'Your .env file was configured incorrectly. ' +
      'Please, check .env.example and fix all invalid or missing fields!';

    if (missingFields.length > 0) {
      errorMessage += '\nMissing fields:';
      missingFields.forEach((field) => {
        errorMessage += `\n\t- ${field}`;
      });
    }

    if (invalidFields.length > 0) {
      errorMessage += '\nInvalid fields:';
      invalidFields.forEach((field) => {
        errorMessage += `\n\t- ${field}`;
      });
    }

    throw new Error(errorMessage);
  }

  return validatedConfig;
};

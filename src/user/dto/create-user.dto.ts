/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { SignupAuthDto } from '../../auth/dto/signup-auth.dto';

export class CreateUserDto extends PartialType(SignupAuthDto) {}

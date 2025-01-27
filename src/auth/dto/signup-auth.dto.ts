/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @MinLength(4)
  username: string;
}

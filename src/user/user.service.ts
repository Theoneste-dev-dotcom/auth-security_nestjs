/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepsotory: Repository<User>,
  ) {}
  async findByEmail(email: string) {
    return await this.userRepsotory.findOne({
      where: { email },
      select: { name: true, password: true, role: true },
    });
  }

  async findAll() {
     await this.userRepsotory.find();  
  }


  
  create(createUserDto: CreateUserDto) {
    
  return this.userRepsotory.save(createUserDto);
  }
}

/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn } from "typeorm";
import { Column } from "typeorm";
export enum RoleEnum {
    ADMIN = 'ADMIN',
    SELLER = 'SELLER' ,
    CONSUMER = 'CONSUMER' 

}

@Entity()
export class User {

  @PrimaryColumn()
  id: number;
  @Column({
    type:'enum',
    enum: RoleEnum,
    default: RoleEnum.CONSUMER
  })
  role: RoleEnum;
  email: string;
  password:string;
  name:string

}


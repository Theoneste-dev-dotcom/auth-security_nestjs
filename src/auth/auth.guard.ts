/* eslint-disable prettier/prettier */
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request: Request = context.switchToHttp().getRequest();
      const token = request.headers.authorization?.split(' ')[1];
  
      if (!token) {
        throw new UnauthorizedException();
      }
  
      try {
        const payload:object = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });
        request["user"] = payload;
      } catch {
        throw new UnauthorizedException();
      }
  
      return true;
    }
  }
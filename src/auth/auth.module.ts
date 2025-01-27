import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    forwardRef(() => UsersModule), // Resolve cyclic dependency
    JwtModule.register({
      secret: 'secretKey', // Use env variables in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ],
  exports: [AuthService, JwtModule], // Export to use in UsersModule
})
export class AuthModule {}

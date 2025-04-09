import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { District } from 'src/district/entities/district.entity';
// import { DistrictService } from 'src/district/district.service'; // ✅ นำเข้า DistrictService
import { DistrictModule } from 'src/district/district.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, District]),DistrictModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}

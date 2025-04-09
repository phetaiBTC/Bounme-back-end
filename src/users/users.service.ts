import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { DistrictService } from 'src/district/district.service';
import * as bcrypt from 'bcryptjs';
// import { District } from 'src/district/entities/district.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly districtRepository: DistrictService,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.username = createUserDto.username;
    newUser.email = createUserDto.email;
    newUser.date_of_birth = createUserDto.date_of_birth;
    newUser.password = await bcrypt.hash(createUserDto.password, 10);
    newUser.gender = createUserDto.gender;
    const district = await this.districtRepository.findOne(createUserDto.district);
    if (!district) {
      throw new Error('District not found');
    }
    newUser.district = district;
    await this.userRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userRepository.find({
      relations: ['district', 'district.province'],
    }).then(users =>
      users.map(user => {
        const { password, district, ...rest } = user;
        return {
          ...rest,
          district: district?.name || null,
          province: district?.province?.name || null,
        };
      })
    );
  }
  

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

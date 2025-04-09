import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Province } from '../../province/entities/province.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('dristric')
export class District {
  @PrimaryGeneratedColumn({ name: 'dr_id' })
  id: number;

  @Column({ name: 'dr_name', type: 'varchar', length: 200 })
  name: string;

  @Column({ name: 'dr_name_en', type: 'varchar', length: 200 })
  nameEn: string;

  @ManyToOne(() => Province, (province) => province.districts)
  province: Province;
  
  @OneToMany(() => User, (user) => user.district) // ✅ เพิ่ม OneToMany
  users: User[]
}

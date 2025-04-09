import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { District } from '../../district/entities/district.entity';

@Entity('province')
export class Province {
  @PrimaryGeneratedColumn({ name: 'pr_id' })
  id: number;

  @Column({ name: 'pr_name', type: 'varchar', length: 200 })
  name: string;

  @Column({ name: 'pr_name_en', type: 'varchar', length: 200 })
  nameEn: string;

  @OneToMany(() => District, (district) => district.province)
  districts: District[];
}

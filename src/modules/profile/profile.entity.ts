import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Gender } from 'src/common/enums/gender.enum';
import { User } from '../auth/entities/user.entity';

@Entity('profile')
@Unique(['phone'])
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column()
  age: number;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToOne((type) => User, (user) => user.profile)
  user: User;
}

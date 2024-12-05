import { Auth } from 'src/common/classes/auth';
import { Role } from 'src/common/enums/role.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Profile } from 'src/modules/profile/profile.entity';

@Entity('users')
@Unique(['email', 'username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  salt: string;

  @Column({
    type: 'enum',
    enum: Role,
    array: true,
  })
  roles: Role[];

  @Column('simple-json')
  auth: Auth;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

  @OneToOne((type) => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  // Foreign key
  @Column()
  profileId: number;
}

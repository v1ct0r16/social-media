import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Base } from './base.entity';


@Entity()
export class Media extends Base {

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({unique: true})
  email: string;

//   @Column({
//     type:'enum',
//     // enum: userRole,
//     // default: userRole.member
//   })
  
}

 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Base } from './base.entity';


@Entity()
export class Media extends Base {

  @Column()
  title: string;

  @Column()
  note: string;

  

//   @Column({
//     type:'enum',
//     // enum: userRole,
//     // default: userRole.member
//   })
  
}

 
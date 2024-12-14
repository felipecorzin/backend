import { Column, DeleteDateColumn, Entity,
     } from 'typeorm';
// import { User } from 'src/users/entities/user.entity'; JoinColumn, ManyToOne

@Entity()
export class Actividades {
    // @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    img: string;

    @DeleteDateColumn()
    deletedAt: Date;
}

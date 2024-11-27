import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Activity {

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
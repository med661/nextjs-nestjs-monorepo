import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Training {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 100 })
    category: string;

    @Column({ type: 'varchar', length: 50 })
    duration: string;

    @Column({ type: 'varchar', length: 50 })
    level: string;

    @Column({ type: 'varchar', length: 255 })
    location: string;

    @Column('simple-array')
    images: string[];

    @Column({ type: 'varchar', length: 255, nullable: true })
    video: string[];

    @Column({ type: 'float' })
    rating: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'text' })
    description: string;

    @Column('simple-array')
    learn: string[];

    @Column('simple-array')
    courseIncludes: string[];

    @Column('simple-array')
    courseContent: string[];

    @Column('simple-array')
    requirements: string[];
}

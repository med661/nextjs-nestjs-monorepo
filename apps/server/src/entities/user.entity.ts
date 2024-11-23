import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Role } from 'src/enums';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';


registerEnumType(Role, {
    name: 'Role', // The name used in the GraphQL schema
    description: 'The role of the user (admin or user)', // Optional description
});


@ObjectType()
@Entity('users')
export class User {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: false })
    fullName: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    password: string;

    @Field({ nullable: true }) // Phone number is optional
    @Column({ nullable: true })
    phone: string;

    @Field({ nullable: true }) // Profile image URL is optional
    @Column({ nullable: true })
    imageUrl: string;

    @Field(() => Boolean)
    @Column({ default: true })
    isEmailVerified: boolean;

    @Field(() => Role)
    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;


    @Field()
    @Column({ default: '' })
    address: string;

    @Field()
    @Column({ default: '' })
    header: string;


    @Field()
    @Column({ default: '' })
    bio: string;

    @Field()
    @Column({ default: '' })
    instagram: string;

    @Field()
    @Column({ default: '' })
    gitHub: string;


    @Field()
    @Column({ default: '' })
    linkedIn: string;


    @Field()
    @Column({ default: '' })
    x: string;


    @Field()
    @Column({ default: '' })
    otherLink: string;

    @Field()
    @Column({ default: '' })
    resume: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}

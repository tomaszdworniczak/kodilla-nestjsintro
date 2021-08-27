import {Roles} from "../../shared/enums/roles.enum";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserAddress} from "./user-address.entity";

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    lastName: string;

    @Column({ length: 50 })
    email: string;

    @Column({ type: Date })
    dateOfBirth: Date;

    @OneToMany(type => UserAddress, address => address.user)
    address?: UserAddress[];

    @Column('enum', {
        enum: Roles
    })
    role: Roles;
}
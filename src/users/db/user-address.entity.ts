import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./users.entity";

@Entity({
    name: 'user_addresses'
})
export class UserAddress {
    @PrimaryGeneratedColumn( 'uuid')
    id: string

    @ManyToOne(type => User, user => user.id, {
        onDelete: 'CASCADE',
    })
    user: User;

    @Column({ length: 50 })
    country: string;

    @Column({ length: 50 })
    city: string;

    @Column({ length: 50 })
    street: string;

    @Column({ type: "int" })
    buildingNumber: number;

    @Column({ type: "int" })
    flatNumber: number;
}
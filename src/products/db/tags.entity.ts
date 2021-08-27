import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {MaxLength} from "class-validator";

@Entity({
    name: 'tags'
})
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 50})
    name: string
}
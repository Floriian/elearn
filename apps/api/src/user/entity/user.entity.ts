import { AfterLoad, Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @AfterLoad()
    getName() {
        return this.firstName + this.lastName;
    }    
}

export type UserRepository = Repository<User>;
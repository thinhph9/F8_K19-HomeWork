import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category' })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    categoryId: number | null

    @Column()
    name: string

    @Column()
    createAt: Date

    @Column()
    createBy: number

    @Column()
    modifiedAt: Date

    @Column()
    modifiedBy: number

    @Column()
    deletedAt: Date

    @Column()
    deletedBy: number

    @Column()
    active: boolean



}
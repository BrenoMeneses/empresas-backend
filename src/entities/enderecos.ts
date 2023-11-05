import { 
    Entity, 
    BaseEntity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('endereco')
export class Endereco extends BaseEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "varchar", nullable: false})
    nome_da_rua: string

    @Column({type: "int", nullable: false})
    numero: number

    @Column({type: "varchar", nullable: false})
    cep: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

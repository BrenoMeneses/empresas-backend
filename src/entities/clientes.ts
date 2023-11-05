import { 
    Entity, 
    BaseEntity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm'
import { Endereco } from './enderecos'

@Entity('cliente')
export class Cliente extends BaseEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "varchar", nullable: false})
    nome_do_cliente: string

    @Column({type: "varchar", nullable: false})
    senha: string

    @Column({type: "varchar", nullable: false})
    rezao_social: string

    @Column({type: "varchar", nullable: false})
    cnpj: string

    @Column({type: "varchar", nullable: false})
    telefone: string

    @Column({type: "varchar", nullable: false})
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(()=>Endereco)
    @JoinColumn()
    endereco: Endereco
}

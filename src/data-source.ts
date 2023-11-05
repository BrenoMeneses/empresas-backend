import { DataSource } from 'typeorm'
import { Cliente } from './entities/clientes'
import { Endereco } from './entities/enderecos'

export const mysqlDataSource = new DataSource ({

    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "empresas",
    entities: [Cliente, Endereco],
    synchronize: true

})

import { mysqlDataSource } from './data-source'
import express from 'express'
import { Router } from 'express'
import clienteRota from './rotas/clienteController'
import cors from 'cors'

mysqlDataSource.initialize()
    .then(()=>{ console.log("conectado ao banco de dados") })
    .catch( (err)=>{console.log(err)})

    
const app = express()
const routes = Router()
    
app.use(cors())
app.use(express.json())
app.use(routes)

routes.use('/api', clienteRota)

app.listen(8080, () => {console.log("rodando na porta :8080")})

import { Request, Response } from 'express'
import { Router } from 'express'
import { mysqlDataSource } from '../data-source'
import { Cliente } from '../entities/clientes'
import { Endereco } from '../entities/enderecos'

const cliente = Router()

cliente.get("/", async (req: Request, res: Response)=>{
    let empresas = await mysqlDataSource.getRepository(Cliente).find({
        relations: {
            endereco: true
        }
    })

    return res.status(200).json(empresas)
})

cliente.post("/", async (req: Request, res: Response)=>{

    const data = req.body
    console.log(data)

    if(data.length === 0){

    }else{

        let endereco = new Endereco()
        endereco.nome_da_rua = data.endereco
        endereco.numero = data.numero
        endereco.cep = data.cep
        
        try{
            await endereco.save()
        }catch(err){
            console.log(err)
        }
    
        let ultimoEndereco = await mysqlDataSource.getRepository(Endereco)
            .createQueryBuilder("endereco")
            .orderBy("endereco.createdAt", "DESC")
            .getOne()
        if(ultimoEndereco){
            let cliente = new Cliente()
            cliente.nome_do_cliente = data.nomeCliente
            cliente.senha = data.senha
            cliente.rezao_social = data.nomeEmpresa
            cliente.cnpj = data.cnpj
            cliente.telefone = data.telefone
            cliente.email = data.email
            cliente.endereco = ultimoEndereco

            try{
                await cliente.save()
            }catch(err){
                console.log(err)
            }
        }
    }
    return res.json(data)
})

cliente.get("/:id", async (req: Request, res: Response)=>{

    let id = req.params.id

    let cliente = await mysqlDataSource.getRepository(Cliente)
    .createQueryBuilder("cliente")
    .innerJoinAndSelect("cliente.endereco", "endereco")
    .where("cliente.id = :id", {id: id})
    .getOne()

    return res.status(200).json(cliente)
})

cliente.put("/:id", async (req: Request, res: Response)=>{

    let id = req.params.id
    let data = req.body

    let cliente = await mysqlDataSource.getRepository(Cliente)
    .createQueryBuilder("cliente")
    .innerJoinAndSelect("cliente.endereco", "endereco")
    .where("cliente.id = :id", {id: id})
    .getOne()

    

    if(cliente){

        let endereco = await mysqlDataSource.getRepository(Endereco)
        .createQueryBuilder('endereco')
        .where("endereco.id = :id", {id: cliente.endereco.id})
        .getOne()

        if(endereco){
            cliente.nome_do_cliente = data.nomeCliente
            cliente.rezao_social = data.nomeEmpresa
            cliente.cnpj = data.cnpj
            cliente.telefone = data.telefone
            cliente.email = data.email
    
            endereco.cep = data.cep
            endereco.nome_da_rua = data.endereco
            endereco.numero = data.numero
    
            try{
                await cliente.save()
            }catch(err){
                console.log(err)
            }

            try{
                await endereco.save()
            }catch(err){
                console.log(err)
            }
        }
    }

    return res.status(200)

})

cliente.delete("/:id", async (req: Request, res: Response)=>{

    let id = Number(req.params.id)

    let cliente = await mysqlDataSource.getRepository(Cliente)
    .createQueryBuilder("cliente")
    .innerJoinAndSelect("cliente.endereco", "endereco")
    .where("cliente.id = :id", {id: id})
    .getOne()

    if(cliente){

        let endereco = await mysqlDataSource.getRepository(Endereco)
        .createQueryBuilder('endereco')
        .where("endereco.id = :id", {id: cliente.endereco.id})
        .getOne()

        if(endereco){

            console.log(cliente)
            console.log(endereco)

            try {
                await mysqlDataSource.getRepository(Cliente).delete({id: cliente.id});
                console.log('Registro excluído com sucesso!');
            } catch (error) {
                console.error('Erro ao excluir o registro:', error);
            }

            try {
                await mysqlDataSource.getRepository(Endereco).delete({ id: endereco.id });
                console.log('Registro excluído com sucesso!');
            } catch (error) {
                console.error('Erro ao excluir o registro:', error);
            }

        }

    }

})

export default cliente
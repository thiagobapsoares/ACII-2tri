module.exports = (app) =>{
    app.post('/atividades',async(req,res)=>{
        var dados = req.body
        //return console.log(dados)
        //conectar com o database
        const database = require("../config/database")()
        //importar o model atividades
        const atividades = require("../models/atividades")
        //gravar as informações do formulário no database
        var gravar = await new atividades({
            //primeira parte:models; segunda parte:formulário
            usuario:dados.id,
            titulo:dados.titulo,
            data:dados.data,
            tipo:dados.tipo,
            disciplina:dados.disciplina,
            entrega:dados.entrega,
            instrucoes:dados.orientacoes
        }).save()
        //buscar as atividades do usuário
        var buscar = await atividades.find({usuario:dados.id})
        //recarregar a página atividades
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id,lista:buscar})
    })
}
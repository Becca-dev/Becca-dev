const Sequelize = require('sequelize')
const sequelize = new Sequelize('calculadora', 'root', '' , {
    host:'',
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
     
    console.log("conectado com sucesso")
        }).cath(function(erro){
        console.log("falha ao se conectar"+erro)
})

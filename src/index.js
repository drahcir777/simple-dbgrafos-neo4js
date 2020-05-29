const neo4j = require('neo4j-driver');
const express = require('express')

const app = express();
var driver = neo4j.driver('bolt://54.146.71.112:33166', neo4j.auth.basic('neo4j', 'interval-complaint-craft'));



 /***** Essa query ela nos trás os resultados, bem parecido com o SQL *****/
//var query = `MATCH (c1:Cidadao) WHERE c1.Nome = "Richard" RETURN c1`;

  /*** Essa query ela nos trás os resultados dos paises */
//var query = `MATCH (p1:Pais) WHERE p1.Nome = "Holanda" RETURN p1`;

/**
 * Já essa query ela cria os registros dos Cidadãos e também os Paises, bata mudar as tags "c1" e os campos
 * dentro do {}
 * var query = `CREATE (c1:Cidadao {Nome: "Richard"}),
    (c2:Cidadao {Nome: "Monica"}),
    (c3:Cidadao {Nome: "Roberta"}),
    (c4:Cidadao {Nome: "Rodrigo"})`;
 */


/**
 * Agora para criar um relacionamento entre as entidades basta usarmos essa query
 * var query = `CREATE (p1)-[re1:Morou]->(c1),
             (p1)-[r2:Viajou]->(c4)`;
 */

 /**
  * Aqui buscamos os relacionamentos das duas entidades que foi criado.
  * var query = `MATCH(c1:Cidadao), (p1:Pais) return *`;
  */

var params = {"limit": 10};

var session = driver.session();


//session.run(query, params)



session.run(query, params)
  .then(function(result) {
    result.records.forEach(function(record) {
      console.log(record.get('p1'));
    })
  })
  .catch(function(error) {
    console.log(error);
  });

  


app.listen(3000, () =>{
    console.log("Servidor conectado")
})
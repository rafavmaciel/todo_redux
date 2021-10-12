// o que o express faz basicamente é fazer a comunicação do backend com o front , através de get , post..... no front vc manda uma requisição desse tipo para cá e ele pega e manda algo
const app = require("express")();
const consign = require("consign"); // é uma bib que é usada só para nao precisar importar e todos os outros módulos
//(como estao em arquivos separados nesse proj) (body parser, coors,) . ele importa e adiciona ao express(app)
const db = require('./config/db')

app.db = db //coloco as conf do banco em app

// é como fazer app.use(bodyParser.json())....
consign()
.then("./config/middlewares.js")
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(3001, () => {
  console.log("backend executando na porta 3001");
});

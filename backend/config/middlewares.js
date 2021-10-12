const bodyParser = require('body-parser') //traforma a requisição para un tipo mais amigável(JSON)
const cors = require('cors') //permite que o front se conecte com  o back

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    
}
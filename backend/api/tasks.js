//aqui é feito o processamento das requisiçoes
//tudo poderia ser feito em um arquivo unico, mas o mapeamento das requisiçoes é feito em routes.js e de acordo com a rota e o metodo mapeado lá, ativa uma função aqui
module.exports = (app) => {
    const save = (req, res) => {
        const description = req.body.description;
        const dateEnd = req.body.dateEnd
        console.log(dateEnd)
        const done = req.body.done;
        const query =
            "INSERT INTO `todo_db`.`tarefa` (`description`, `done`,`dateEnd`) VALUES (?, ?, ?);";
        app.db.query(query, [description, done, dateEnd], function (err, result) {
            if (!err) {
                res.send("funcionou");
            } else {
                res.send("nao funcionou");
            }
        });
    };

    const getAll = (req, res) => {
        const sqlInsert = "SELECT * FROM todo_db.tarefa order by dateEnd ASC;";
        app.db.query(sqlInsert, (err, result) => {
            res.send(result);
            console.log(result)
        });
    };

    const deleteTask = (req, res) => {
        const id = req.params.id
        const sqlDelete = "DELETE FROM `todo_db`.`tarefa` WHERE idTarefa = ?";
        app.db.query(sqlDelete, id, function (err, result) {
            if (!err) {
                res.send("funcionou");
            } else {
                res.send("nao funcionou");
            }
        });
    };

    const uptadeStatus = (req, res) => {
        const id = req.params.id
        const status = req.body.todo.done
        //console.log(status+'  '+ id)
        const sqlDelete = "UPDATE `todo_db`.`tarefa` SET done = ? WHERE idTarefa = ?";
        app.db.query(sqlDelete, [status,id], function (err, result) {
            if (!err) {
                res.send("funcionou");
            } else {
                res.send("nao funcionou");
            }
        });
    };

    return { save, getAll, deleteTask, uptadeStatus };
    // const get = (req, res) => {
    //     app.db('users')
    //         .select('id', 'name', 'email', 'admin')
    //         .whereNull('deletedAt')
    //         .then(users => res.json(users))
    //         .catch(err => res.status(500).send(err))
    // }

    // const getById = (req, res) => {
    //     app.db('users')
    //         .select('id', 'name', 'email', 'admin')
    //         .where({ id: req.params.id })
    //         .whereNull('deletedAt')
    //         .first()
    //         .then(user => res.json(user))
    //         .catch(err => res.status(500).send(err))
    // }

    // const remove = async (req, res) => {
    //     try {
    //         const articles = await app.db('articles')
    //             .where({ userId: req.params.id })
    //         notExistsOrError(articles, 'Usuário possui artigos.')

    //         const rowsUpdated = await app.db('users')
    //             .update({deletedAt: new Date()})
    //             .where({ id: req.params.id })
    //         existsOrError(rowsUpdated, 'Usuário não foi encontrado.')
};

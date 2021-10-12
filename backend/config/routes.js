module.exports = (app) => {
    app.route("/tasks")
        .post(app.api.tasks.save) //quanto for feita uma requisição do tipo POST em /users , vai jogar essa requisição pra ser tratada no arq users.js na funcao save
        .get(app.api.tasks.getAll);
    app.route("/tasks/:id")
        .delete(app.api.tasks.deleteTask)
        .put(app.api.tasks.uptadeStatus);
    // app.route('/users/:id')
    //     .all(app.config.passport.authenticate())
    //     .put(admin(app.api.user.save))
    //     .get(admin(app.api.user.getById))
    //     .delete(admin(app.api.user.remove))

    // app.route('/categories')
    //     .all(app.config.passport.authenticate())
    //     .get(admin(app.api.category.get))
    //     .post(admin(app.api.category.save))

    // // Cuidado com ordem! Tem que vir antes de /categories/:id
    // app.route('/categories/tree')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.category.getTree)

    // app.route('/categories/:id')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.category.getById)
    //     .put(admin(app.api.category.save))
    //     .delete(admin(app.api.category.remove))

    // app.route('/articles')
    //     .all(app.config.passport.authenticate())
    //     .get(admin(app.api.article.get))
    //     .post(admin(app.api.article.save))

    // app.route('/articles/:id')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.article.getById)
    //     .put(admin(app.api.article.save))
    //     .delete(admin(app.api.article.remove))

    // app.route('/categories/:id/articles')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.article.getByCategory)

    // app.route('/stats')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.stat.get)
};


module.exports = (app) => {

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'José Augusto',
                email: 'joseaugusto@teste.com.br',
                id: 1
            }]
        });
    });


    app.post('/users', (req, res) => {
        res.json(req.body);
    });

}
module.exports = (app) => {
    app.get('/noticias', async (req, res) => {
        try {
            const resposta = await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find().toArray();
            res.json(noticias)
        } catch (err) {
            res.send(" erro" + err)
        }
        finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }
    })
}
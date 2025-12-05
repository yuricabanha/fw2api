module.exports = (app) => {
    app.get('/noticias', async (req, res) => {
        try {
            //await app.DBClient.connect(); //realizar a conexão com o banco 
            res.send("conectado")
            /* const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find().toArray();
            res.json(noticias) */
        } catch (err) {
            res.send(" erro")
        }
        finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }
    })
}
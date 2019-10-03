/**
 * Metodos possiveis(por padrões da comunidade MVC):
 * -index: metodo q retorna listagem de seções(por ser um SessionController)
 * -show: lista uma unica seção
 * -store: criar uma seção
 * -update: alterar seção
 * -destroy: deletar seção
 */


const User = require('../models/User');

module.exports = {
    //async pra falar q a func pode demorar um pouquinho pra terminar
    async store(req, res) {
        //const email = req.body.email;
        //Desestruturação
        const { email } = req.body;

        // podia ser let user = await User.findOne({ email: email}) mas como a prop tem o msm nome da chave pode omitit
        let user = await User.findOne({ email });

        if (!user) {
            //await só deixa proseguir pra proxima linha qnd a instrução finalizar
            user = await User.create({ email })
        }

        

        return res.json(user);
    }
};
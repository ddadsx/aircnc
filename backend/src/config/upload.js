const multer = require('multer');
const path = require('path');

module.exports = {
    //como o multer vai armazenar os arquivos q vamos receber da aplicação
    storage: multer.diskStorage({
        //path resolve coloca a barra correta de acordo com o sistema operacional
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // cb stands for call back function
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        }, 
    }),
};
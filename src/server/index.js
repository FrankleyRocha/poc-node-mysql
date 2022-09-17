const config = require('./util/config');
const express = require('express');
const app = express();
const db = require("./util/db");

const Usuario = require('./modelo/usuario');

app.get('/api/v1/usuarios', (req, res) => {
  
  (async () => {             
    
    // const res1 = await db.query(`
    //   drop table usuario
    // `);

    await db.sequelize.sync();

    const resultadoDestroy = await Usuario.destroy({ where: { email: 'rocha112358@gmail.com' }});

    const resultadoCreate = await Usuario.create({
      email: 'rocha112358@gmail.com',      
      senha: 'batatinha'
    });
    
    const resultadofindAll = await Usuario.findAll();

    res.send({
      resultadoDestroy,
      resultadoCreate,
      resultadofindAll
    });

  })();

});

app.use('/', express.static('../dist/web'));

app.listen(config.port, () => {
  console.log(`Servidor iniciado e escutando na porta ${config.port}`);
});
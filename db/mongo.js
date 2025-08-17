const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongodb.uri, config.mongodb.options)
.then(() => {
  console.log('✅ Conectado a MongoDB');
  console.log(`📊 Base de datos: ${config.mongodb.uri}`);
})
.catch(err => {
  console.error('❌ Error al conectar MongoDB:', err.message);
  console.log('💡 Asegúrate de que MongoDB esté corriendo');
});

module.exports = mongoose;
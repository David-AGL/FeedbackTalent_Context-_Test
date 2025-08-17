// INSTRUCCIONES PARA MONGODB ATLAS
// 1. Renombra este archivo a config.js
// 2. Reemplaza con tu string de conexión real

module.exports = {
  mongodb: {
    // REEMPLAZA ESTO CON TU STRING DE CONEXIÓN REAL
    uri: 'mongodb+srv://TU_USUARIO:TU_PASSWORD@TU_CLUSTER.mongodb.net/feedbackDB?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  server: {
    port: 5000,
    environment: 'development'
  }
};

/*
PASOS PARA MONGODB ATLAS:

1. Ve a https://www.mongodb.com/atlas
2. Crea cuenta gratuita
3. Crea cluster gratuito (M0)
4. En "Database Access" crea usuario con contraseña
5. En "Network Access" agrega tu IP o 0.0.0.0/0
6. En "Clusters" haz clic en "Connect"
7. Selecciona "Connect your application"
8. Copia el string de conexión
9. Reemplaza username, password y cluster
10. Renombra este archivo a config.js

EJEMPLO REAL:
mongodb+srv://davidg:miContraseña123@cluster0.abc123.mongodb.net/feedbackDB?retryWrites=true&w=majority
*/

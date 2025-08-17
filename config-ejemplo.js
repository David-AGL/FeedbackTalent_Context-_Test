// CONFIGURACIÓN REAL DE MONGODB ATLAS
// Este archivo muestra la configuración que ya está funcionando

module.exports = {
  mongodb: {
    // Tu string de conexión real:
    uri: 'mongodb+srv://admin:dialga@cluster0.wkxhouu.mongodb.net/feedbackDB?retryWrites=true&w=majority&appName=Cluster0',
    
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
DATOS DE TU CUENTA ATLAS:
- Usuario: admin
- Contraseña: dialga
- Cluster: cluster0.wkxhouu.mongodb.net
- Base de datos: feedbackDB (se creará automáticamente)
- Colección: feedbacks (se creará automáticamente)

¡Tu configuración ya está lista para funcionar!
*/

// Configuración para MongoDB Atlas
module.exports = {
  // Base de datos
  mongodb: {
    // String de conexión real de MongoDB Atlas
    uri: process.env.MONGODB_URI || 'mongodb+srv://admin:dialga@cluster0.wkxhouu.mongodb.net/feedbackDB?retryWrites=true&w=majority&appName=Cluster0',
    
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  
  // Servidor
  server: {
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV || 'development'
  }
};

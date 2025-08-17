const express = require('express');
const cors = require('cors');
const config = require('./config');
const Feedback = require('./db/Feedback');

const app = express();

// Middleware básico
app.use(express.json());
app.use(cors());

// Ruta principal - Hello World
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World desde Express',
    timestamp: new Date().toISOString(),
    environment: config.server.environment
  });
});

// Ruta para crear feedback
app.post('/feedback', async (req, res) => {
  try {
    const { nombre, comentario } = req.body;
    
    if (!nombre || !comentario) {
      return res.status(400).json({
        error: 'Nombre y comentario son requeridos'
      });
    }

    const nuevoFeedback = new Feedback({ nombre, comentario });
    await nuevoFeedback.save();
    
    res.status(201).json({
      message: 'Feedback registrado exitosamente',
      id: nuevoFeedback._id
    });
  } catch (error) {
    console.error('Error al crear feedback:', error);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
});

// Ruta para obtener feedbacks
app.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ fecha: -1 });
    res.json({
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    console.error('Error al obtener feedbacks:', error);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
});

// Iniciar servidor
const PORT = config.server.port;
app.listen(PORT, () => {
  console.log('🚀 Servidor iniciado en puerto:', PORT);
  console.log('🌐 URL: http://localhost:' + PORT);
});



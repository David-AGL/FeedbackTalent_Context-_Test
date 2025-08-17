const mongoose = require('./mongo');

const feedbackSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  comentario: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
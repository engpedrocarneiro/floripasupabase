import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    required: [true, 'Nome da empresa é obrigatório'],
    trim: true,
  },
  industry: {
    type: String,
    required: [true, 'Ramo de trabalho é obrigatório'],
    enum: ['tecnologia', 'imobiliario', 'saude', 'educacao', 'financeiro', 'varejo', 'outro'],
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    minlength: [8, 'A senha deve ter no mínimo 8 caracteres'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
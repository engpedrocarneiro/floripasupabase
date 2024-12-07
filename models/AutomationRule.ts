import mongoose from 'mongoose';

const conditionSchema = new mongoose.Schema({
  field: { type: String, required: true },
  operator: {
    type: String,
    enum: ['equals', 'contains', 'greaterThan', 'lessThan'],
    required: true
  },
  value: { type: mongoose.Schema.Types.Mixed, required: true }
});

const triggerSchema = new mongoose.Schema({
  type: { type: String, enum: ['schedule', 'event'], required: true },
  config: {
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'] },
    time: String,
    days: [Number],
    eventType: String,
    conditions: [conditionSchema]
  }
});

const actionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  params: { type: Map, of: mongoose.Schema.Types.Mixed }
});

const automationRuleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  trigger: {
    type: triggerSchema,
    required: true
  },
  actions: {
    type: [actionSchema],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.AutomationRule || 
  mongoose.model('AutomationRule', automationRuleSchema);
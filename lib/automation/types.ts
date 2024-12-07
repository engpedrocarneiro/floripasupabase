export interface AutomationRule {
  id: string;
  name: string;
  trigger: TriggerConfig;
  actions: ActionConfig[];
  isActive: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TriggerConfig {
  type: 'schedule' | 'event';
  config: ScheduleTrigger | EventTrigger;
}

export interface ScheduleTrigger {
  frequency: 'daily' | 'weekly' | 'monthly';
  time: string; // HH:mm format
  days?: number[]; // Days of week (0-6) or month (1-31)
}

export interface EventTrigger {
  eventType: string;
  conditions: Condition[];
}

export interface Condition {
  field: string;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan';
  value: any;
}

export interface ActionConfig {
  type: string;
  params: Record<string, any>;
}
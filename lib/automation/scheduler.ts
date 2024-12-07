import { scheduleJob } from 'node-schedule';
import { AutomationRule, ScheduleTrigger } from './types';
import { executeActions } from './actions';

export class AutomationScheduler {
  private jobs: Map<string, any> = new Map();

  scheduleAutomation(rule: AutomationRule) {
    if (rule.trigger.type !== 'schedule') return;
    
    const trigger = rule.trigger.config as ScheduleTrigger;
    const schedule = this.createSchedulePattern(trigger);
    
    const job = scheduleJob(schedule, () => {
      executeActions(rule.actions);
    });
    
    this.jobs.set(rule.id, job);
  }

  private createSchedulePattern(trigger: ScheduleTrigger): string {
    const [hours, minutes] = trigger.time.split(':');
    
    switch (trigger.frequency) {
      case 'daily':
        return `${minutes} ${hours} * * *`;
      case 'weekly':
        return `${minutes} ${hours} * * ${trigger.days?.join(',')}`;
      case 'monthly':
        return `${minutes} ${hours} ${trigger.days?.join(',')} * *`;
      default:
        throw new Error('Invalid frequency');
    }
  }

  cancelAutomation(ruleId: string) {
    const job = this.jobs.get(ruleId);
    if (job) {
      job.cancel();
      this.jobs.delete(ruleId);
    }
  }
}
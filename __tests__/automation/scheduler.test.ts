import { AutomationScheduler } from '@/lib/automation/scheduler';
import { AutomationRule } from '@/lib/automation/types';
import { executeActions } from '@/lib/automation/actions';

jest.mock('@/lib/automation/actions');
jest.mock('node-schedule', () => ({
  scheduleJob: (pattern: string, callback: () => void) => ({
    pattern,
    callback,
    cancel: jest.fn()
  })
}));

describe('AutomationScheduler', () => {
  let scheduler: AutomationScheduler;

  beforeEach(() => {
    scheduler = new AutomationScheduler();
    jest.clearAllMocks();
  });

  const mockRule: AutomationRule = {
    id: '1',
    name: 'Test Rule',
    trigger: {
      type: 'schedule',
      config: {
        frequency: 'daily',
        time: '10:00'
      }
    },
    actions: [
      {
        type: 'sendEmail',
        params: { to: 'test@example.com' }
      }
    ],
    isActive: true,
    createdBy: 'user1',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  test('schedules daily automation correctly', () => {
    scheduler.scheduleAutomation(mockRule);
    expect(scheduler['jobs'].size).toBe(1);
  });

  test('cancels automation correctly', () => {
    scheduler.scheduleAutomation(mockRule);
    scheduler.cancelAutomation(mockRule.id);
    expect(scheduler['jobs'].size).toBe(0);
  });
});
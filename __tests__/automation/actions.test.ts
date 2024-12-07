import { executeActions } from '@/lib/automation/actions';
import { ActionConfig } from '@/lib/automation/types';

describe('Action Execution', () => {
  const mockActions: ActionConfig[] = [
    {
      type: 'sendEmail',
      params: {
        to: 'test@example.com',
        subject: 'Test Email'
      }
    },
    {
      type: 'sendNotification',
      params: {
        message: 'Test notification'
      }
    }
  ];

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('executes all actions successfully', async () => {
    await executeActions(mockActions);
    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('continues execution after action error', async () => {
    const errorActions: ActionConfig[] = [
      {
        type: 'invalidAction',
        params: {}
      },
      ...mockActions
    ];

    await executeActions(errorActions);
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
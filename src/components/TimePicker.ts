import { PlainTextElement } from '@slack/types';
import { FC } from '..';

export interface TimePickerSpec {
  initial_time?: string;
  placeholder: PlainTextElement;
  action_id: string;
  type: 'timepicker';
}

export interface TimePickerElementProps {
  initialTime?: string;
  placeholder: PlainTextElement;
  actionId: string;
}

export const TimePickerElement: FC<TimePickerElementProps, TimePickerSpec> = ({
  initialTime,
  actionId,
  placeholder,
}) => ({
  type: 'timepicker',
  action_id: actionId,
  initial_time: initialTime,
  placeholder,
});

import { FC } from '..';
import { MrkdwnElement, PlainTextElement } from '@slack/types';
import { ContainerProps } from './ContainerProps';

// https://api.slack.com/reference/messaging/composition-objects#text

// custom 'spec' since this isn't defined in '@slack/types'
export interface MessageTextSpec {
  text: string;
  mrkdwn: boolean;
}

export type TextType = 'plain_text' | 'mrkdwn';

export type TextProps = ContainerProps<string>;

export type TextElementSpec = MrkdwnElement | PlainTextElement;

export type Text<P extends TextProps, E extends TextElementSpec> = FC<P, E>;

export type MessageText<P extends TextProps, E extends MessageTextSpec> = FC<
  P,
  E
>;

export const joinTextChildren = (children: string | string[]): string => {
  // console.log('TEXT CHILDREN', children);
  return [].concat(children).join('');
};

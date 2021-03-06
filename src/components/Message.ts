import { FC } from '..';
import { ContainerProps } from './ContainerProps';
import { Block } from './Block';
import { AltText } from './MessageText';
import { MessageTextSpec } from './Text';
import { KnownBlock } from '@slack/types';

export type MessageType = 'ephemeral' | 'in_channel';

export interface MessageProps
  extends ContainerProps<ReturnType<Block<any, KnownBlock>>> {
  altText: ReturnType<typeof AltText>;
  responseType?: MessageType;
  channel?: string;
  token?: string;
  asUser?: boolean;
}

export interface MessageSpec extends MessageTextSpec {
  response_type: MessageType;
  channel?: string;
  as_user?: boolean;
  token?: string;
  blocks?: ReturnType<Block<any, KnownBlock>>[];
}

export const Message: FC<MessageProps, MessageSpec> = ({
  children,
  responseType = 'in_channel',
  channel,
  token,
  altText,
  asUser,
}) => {
  const message = {
    response_type: responseType,
    blocks: Array.isArray(children) ? children : [].concat(children),
    as_user: asUser,
    channel,
    token,
    ...altText,
  };

  if (asUser) {
    message.as_user = asUser;
  }
  return message;
};

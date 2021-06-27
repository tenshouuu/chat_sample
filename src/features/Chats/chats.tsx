import React from 'react';
import styled from 'styled-components';
import { Chat } from './Chat';
import { List } from './List';

export const ChatsRoot = styled.div`
  display: flex;
`;

export function Chats(): React.ReactElement {
    return (
      <ChatsRoot>
          <List />
          <Chat />
      </ChatsRoot>
    )
}


import { FC, useContext } from 'react';
import { Header, Group } from '@vkontakte/vkui';

import { Group as GroupComponent } from 'src/components';
import { GroupsContext } from 'src/context/GroupsContext';

const Groups: FC = () => {
  const { groups } = useContext(GroupsContext);

  if (!groups) return;

  return (
    <Group header={<Header mode='secondary'>Список сообществ</Header>}>
      {groups.map((group) => (
        <GroupComponent key={group.id} group={group} />
      ))}
    </Group>
  );
};

export default Groups;

import { FC, useContext } from 'react';
import { Header, Group, Spinner } from '@vkontakte/vkui';

import { Group as GroupComponent } from 'src/components';
import { GroupsContext } from 'src/context/GroupsContext';

const Groups: FC = () => {
  const { groups, isLoading } = useContext(GroupsContext);
  console.log(isLoading);

  if (isLoading) return <Spinner size='large' style={{ margin: '20px 0' }} />;

  if (groups.length === 0)
    return (
      <Header mode='primary' size='large'>
        Сообществ не найдено
      </Header>
    );

  return (
    <Group header={<Header mode='secondary'>Список сообществ</Header>}>
      {groups.map((group) => (
        <GroupComponent key={group.id} group={group} />
      ))}
    </Group>
  );
};

export default Groups;

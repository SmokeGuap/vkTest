import { FC, useContext, useEffect, useState } from 'react';
import { Header, Group } from '@vkontakte/vkui';

import { getGroups } from 'src/API';
import { Filter } from 'src/components';
import { GroupsContext } from 'src/context/GroupsContext';
import { Group as IGroup } from 'src/types';
import { translateColor } from 'src/utils';

const Filters: FC = () => {
  const [allGroups, setAllGroups] = useState<IGroup[]>();
  const [type, setType] = useState<string>('');
  const [color, setColor] = useState<string>('all');
  const [hasFriends, setHasFriends] = useState<string>('');

  const { setGroups, setIsLoading, setError } = useContext(GroupsContext);

  useEffect(() => {
    getGroups({ type, color, hasFriends }).then((data) => setAllGroups(data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getGroups({ type, color, hasFriends })
      .then((data) => {
        setGroups(data);
        setIsLoading(false);
        setError('');
      })
      .catch((error: Error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [type, color, hasFriends]);

  if (!allGroups) return;

  return (
    <Group header={<Header mode='secondary'>Фильтры</Header>}>
      <Filter
        options={[
          {
            label: 'любое',
            value: '',
          },
          {
            label: 'открытое',
            value: 'open',
          },
          {
            label: 'закрытое',
            value: 'close',
          },
        ]}
        value={type}
        changeValue={setType}
      />
      <Filter
        options={[
          {
            label: 'все цвета',
            value: 'all',
          },
          ...allGroups
            .filter(
              (elem, index, arr) =>
                arr.findIndex((e) => e.avatar_color === elem.avatar_color) ===
                index
            )
            .map((group) => ({
              label: group.avatar_color
                ? translateColor(group.avatar_color)
                : 'без цвета',
              value: group.avatar_color ? group.avatar_color : '',
            }))
            .sort((a, b) => a.label.localeCompare(b.label)),
        ]}
        value={color}
        changeValue={setColor}
      />
      <Filter
        options={[
          {
            label: 'все',
            value: '',
          },
          {
            label: 'только те, на которые подписаны друзья',
            value: 'yes',
          },
          {
            label: 'только те, на которые не подписаны друзья',
            value: 'no',
          },
        ]}
        value={hasFriends}
        changeValue={setHasFriends}
      />
    </Group>
  );
};

export default Filters;

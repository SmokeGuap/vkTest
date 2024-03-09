import { FC, useState } from 'react';
import { SimpleCell, Accordion, Div } from '@vkontakte/vkui';

import { Group as TGroup } from 'src/types';
import { getNoun } from 'src/utils';

const Group: FC<{ group: TGroup }> = (props) => {
  const { group } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SimpleCell
      key={group.id}
      expandable='auto'
      before={
        <div
          style={{
            borderRadius: '100%',
            height: '100px',
            width: '100px',
            border: '1px solid #529ef4',
            backgroundColor: group.avatar_color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!group.avatar_color && 'Нет цвета'}
        </div>
      }
      subhead={group.closed ? 'закрытое' : 'открытое'}
      subtitle={
        group.members_count +
        ` ${getNoun(
          group.members_count,
          'подписчик',
          'подписчика',
          'подписчиков'
        )}`
      }
      extraSubtitle={
        group.friends ? (
          <Accordion
            expanded={isOpen}
            onChange={(e) => (e ? setIsOpen(true) : setIsOpen(false))}
          >
            <Accordion.Summary>
              {group.friends.length +
                ` ${getNoun(group.friends.length, 'друг', 'друга', 'друзей')}`}
            </Accordion.Summary>
            <Accordion.Content>
              {group.friends?.map((friend, id) => (
                <Div key={id}>{`${friend.first_name} ${friend.last_name}`}</Div>
              ))}
            </Accordion.Content>
          </Accordion>
        ) : null
      }
    >
      {group.name}
    </SimpleCell>
  );
};

export default Group;

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
} from 'react';
import { Group } from 'src/types';

interface IGroupsContext {
  groups: Group[];
  setGroups: Dispatch<SetStateAction<Group[]>>;
}

interface IGroupsProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const GroupsContext = createContext<IGroupsContext>({
  groups: [],
  setGroups: () => null,
});

const GroupsProvider: FC<IGroupsProviderProps> = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsProvider, GroupsContext };

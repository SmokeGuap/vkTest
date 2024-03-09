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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  groups: Group[];
  setGroups: Dispatch<SetStateAction<Group[]>>;
}

interface IGroupsProviderProps extends React.DOMAttributes<HTMLDivElement> {
  children: ReactNode;
}

const GroupsContext = createContext<IGroupsContext>({
  isLoading: false,
  setIsLoading: () => null,
  groups: [],
  setGroups: () => null,
});

const GroupsProvider: FC<IGroupsProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

  return (
    <GroupsContext.Provider
      value={{ groups, setGroups, isLoading, setIsLoading }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsProvider, GroupsContext };

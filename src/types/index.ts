import { CustomSelectOptionInterface, SelectProps } from '@vkontakte/vkui';
import { Dispatch, SetStateAction } from 'react';

interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}

export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

interface User {
  first_name: string;
  last_name: string;
}

export interface GetGroupsParams {
  type: string;
  color: string;
  hasFriends: string;
}

export interface FilterProps extends SelectProps<CustomSelectOptionInterface> {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

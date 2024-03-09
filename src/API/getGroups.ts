import { GetGroupsParams, GetGroupsResponse } from 'src/types';

import groupsJSON from 'src/groups.json';

const getGroups = async ({ type, color, hasFriends }: GetGroupsParams) => {
  try {
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await promise
      .then((): GetGroupsResponse => {
        return {
          result: 1,
          data: groupsJSON
            .filter((group) => {
              return type === ''
                ? true
                : type === 'open'
                ? group.closed === false
                : group.closed === true;
            })
            .filter((group) => {
              return color === 'all'
                ? true
                : color === group.avatar_color
                ? true
                : false;
            })
            .filter((group) => {
              return hasFriends === ''
                ? true
                : hasFriends === 'yes'
                ? group.friends && group.friends?.length > 0
                : hasFriends === 'no'
                ? !group.friends
                : false;
            }),
        };
      })
      .catch((error) => {
        throw new Error(`There was a error: ${error}`);
      });

    if (res.result == 0) throw new Error(`Result is 0`);
    if (!res.data) throw new Error(`No data`);

    return res.data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`There was a SyntaxError: ${error}`);
    } else {
      throw new Error(`There was a error: ${error}`);
    }
  }
};

export default getGroups;

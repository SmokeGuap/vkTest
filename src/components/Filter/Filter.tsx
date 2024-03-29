import { FC, useId } from 'react';
import { CustomSelect, FormItem } from '@vkontakte/vkui';

import { FilterProps } from 'src/types';

const Filter: FC<FilterProps> = (props) => {
  const { title, value, changeValue, options, ...rest } = props;

  const id = useId();

  return (
    <FormItem htmlFor={id} top={title}>
      <CustomSelect
        {...rest}
        onChange={(e) => changeValue(e.target.value)}
        value={value}
        id={id}
        placeholder='Не выбран'
        options={options}
      />
    </FormItem>
  );
};

export default Filter;

import { ChangeEventHandler, type FC, memo, useCallback, useEffect, useState } from 'react';
import SearchIcon from '@/assets/icons/search.svg';
import { Input } from '@/atom/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { type SearchProps } from './types';

export const Search: FC<SearchProps> = memo(
  ({ placeholder = 'Search ...', value, onChangeText }) => {
    const [searchText, setSearchText] = useState(value);
    const debText = useDebounce(searchText, 500);

    useEffect(() => {
      onChangeText && onChangeText(debText || '');
    }, [debText]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSearchText(event.target.value);
    }, []);

    return (
      <Input
        type="text"
        helperText="Search"
        value={searchText}
        onChange={onChange}
        placeholder={placeholder}
        icon={<SearchIcon />}
      />
    );
  },
);

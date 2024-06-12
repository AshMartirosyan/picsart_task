import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '@/molecule/Search';
import { Select, type SelectItem } from '@/molecule/Select';
import { orderOptions, sortByOptions } from './constants';
import { BaseComponent } from './UserFilters.styled';

export const UserFilters = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectSortField = useCallback(
    (item: SelectItem) => {
      if (!item?.value) {
        searchParams.delete('sortBy');
        searchParams.delete('order');
      } else {
        searchParams.set('sortBy', item.value);
      }
      setSearchParams(searchParams);
    },
    [searchParams],
  );

  const onSelectOptionField = useCallback(
    (item: SelectItem) => {
      if (!item.value) {
        searchParams.delete('order');
      } else {
        searchParams.set('order', item.value);
      }

      setSearchParams(searchParams);
    },
    [searchParams],
  );

  const handleSearch = useCallback(
    (value: string) => {
      if (!value) {
        searchParams.delete('search');
      } else {
        searchParams.set('search', value);
      }

      setSearchParams(searchParams);
    },
    [searchParams],
  );

  return (
    <BaseComponent>
      <Search value={searchParams.get('search') || ''} onChangeText={handleSearch} />
      <Select
        inputProps={{ placeholder: 'Select', helperText: 'Sort By' }}
        initialValue={sortByOptions.find((item) => item.value === searchParams.get('sortBy'))}
        onSelect={onSelectSortField}>
        {sortByOptions.map((item) => (
          <Select.Option key={item.value} item={item} />
        ))}
      </Select>
      {searchParams.has('sortBy') && (
        <Select
          inputProps={{ placeholder: 'Sort Option', helperText: 'Order' }}
          initialValue={orderOptions.find((item) => item.value === searchParams.get('order'))}
          onSelect={onSelectOptionField}>
          {orderOptions.map((item) => (
            <Select.Option key={item.value} item={item} />
          ))}
        </Select>
      )}
    </BaseComponent>
  );
});

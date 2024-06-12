import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import DownIcon from '@/assets/icons/down.svg';
import { Input } from '@/atom/Input';
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler';
import { once } from '@/util/helpers';
import { Maybe } from '@/util/types';
import { ErrorText, OptionList, SelectContainer, StyledOption } from './Select.styled';
import type { SelectItem, SelectProps, SelectState } from './types';

const createStateContext = once(<T extends SelectItem>() =>
  createContext<SelectState<T>>({ activeOption: null }),
);

export const useSelect = <T extends SelectItem>() => useContext(createStateContext<T>());

export const Select = <T extends SelectItem>({
  initialValue = null,
  children,
  onSelect,
  inputProps,
  error,
}: SelectProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const SelectContext = createStateContext<T>();
  const [activeOption, setActiveOption] = useState<Maybe<T>>(initialValue);
  const [focused, setFocused] = useState(false);

  useOutsideClickHandler(containerRef, () => {
    inputRef.current?.blur();
    setFocused(false);
  });

  const onOptionSelect = (option: T) => {
    onSelect && onSelect(option);
    setActiveOption(option);
    inputRef.current?.blur();
    setFocused(false);
  };

  const onFocusChange = useCallback(
    (value: boolean) => () => {
      setFocused(value);
    },
    [],
  );

  return (
    <SelectContext.Provider
      value={{
        activeOption,
        setActiveOption: onOptionSelect,
      }}>
      <SelectContainer ref={containerRef}>
        <Input
          ref={inputRef}
          onFocus={onFocusChange(true)}
          value={activeOption?.value ? activeOption.label : ''}
          readOnly
          icon={<DownIcon />}
          {...inputProps}
        />
        {focused && (
          <OptionList>
            <Option item={{ label: 'Select', value: '' }} />
            {children}
          </OptionList>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </SelectContainer>
    </SelectContext.Provider>
  );
};

interface OptionProps<T> {
  item: T;
}

const Option = <T extends SelectItem>(props: PropsWithChildren<OptionProps<T>>) => {
  const { setActiveOption, activeOption } = useSelect();

  const onClick = useCallback(() => {
    setActiveOption && setActiveOption(props.item);
  }, [props.item, setActiveOption]);

  if (!activeOption?.value && !props.item.value) {
    return null;
  }

  return <StyledOption onClick={onClick}>{props.item.label}</StyledOption>;
};

Select.Option = Option;

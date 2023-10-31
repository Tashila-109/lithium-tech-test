import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'

import { SearchContainer, SearchIcon, StyledInput } from './SearchInput.styles';

export interface SearchInputProps {
  id: string;
  placeholderText?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onClear?: () => void;
  clearable?: boolean;
  value?: string;
}

const SearchInputComponent: React.FC<SearchInputProps> = ({
  id,
  placeholderText = 'Search',
  clearable = false,
  disabled = false,
  onChange,
  onClear,
  value,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      <SearchContainer
        id={`${id}-container`}
        disabled={disabled}
      >
        <SearchIcon className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[13.5px]">
          <AiOutlineSearch />
        </SearchIcon>
        <StyledInput
          id={`${id}-search-input`}
          type="search"
          placeholder={placeholderText}
          disabled={disabled}
          onChange={handleInputChange}
          value={value}
          autoComplete="off"
        />
        {clearable && value && (
          <AiOutlineClose
            id={`${id}-clear-button`}
            onClick={onClear}
          />
        )}
      </SearchContainer>
    </>
  );
};

export default SearchInputComponent;
import { AiOutlineSearch } from 'react-icons/ai';

import { ClearButton, SearchContainer, SearchIcon, StyledInput } from './SearchInput.styles';

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
      <SearchContainer id={`${id}-container`} disabled={disabled}>
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <StyledInput
          id={`${id}-search-input`}
          type='search'
          placeholder={placeholderText}
          disabled={disabled}
          onChange={handleInputChange}
          value={value}
          autoComplete='off'
        />
        {clearable && value && <ClearButton id={`${id}-clear-button`} onClick={onClear} />}
      </SearchContainer>
    </>
  );
};

export default SearchInputComponent;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBarField, SearchBarWrapper, SearchBarIconButton, SearchBarLinearProgress } from '../elements';
import SearchBarIcon from '@material-ui/icons/Search';

SearchBar.propTypes = {
  loading: PropTypes.bool,
  onSearch: PropTypes.func,
  onCancelSearch: PropTypes.func
};
export default function SearchBar({ loading, onSearch, onCancelSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = ({ target: { value } }) => {
    if (!value) {
      onCancelSearch();
      return;
    }
    setSearchTerm(value);
    if (value.length > 3) {
      onSearch(value);
    }
  };

  const onKeyDown = ({ keyCode }) => {
    if (!searchTerm) {
      onCancelSearch();
      return;
    }

    if (searchTerm.trim()) {
      if (keyCode === 13) {
        onSearch(searchTerm);
      }
      if (keyCode === 8) {
        onCancelSearch();
      }
    }
  };

  return (
    <SearchBarWrapper>
      {loading && <SearchBarLinearProgress />}
      <SearchBarField
        id="standard-search"
        label="Find github repo"
        type="search"
        margin="normal"
        onChange={onChange}
        inputProps={{
          onKeyDown
        }}
      />
      <SearchBarIconButton
        onClick={() => searchTerm.trim() && onSearch(searchTerm)}
        aria-label="search"
      >
        <SearchBarIcon />
      </SearchBarIconButton>
    </SearchBarWrapper>
  );
}

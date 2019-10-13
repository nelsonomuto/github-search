import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchField, SearchWrapper, SearchIconButton, SearchLinearProgress } from '../elements';
import SearchIcon from '@material-ui/icons/Search';

Search.propTypes = {
  loading: PropTypes.bool,
  onSearch: PropTypes.func,
  onCancelSearch: PropTypes.func
};
export default function Search({ loading, onSearch, onCancelSearch }) {
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
    }
  };

  return (
    <SearchWrapper>
      {loading && <SearchLinearProgress />}
      <SearchField
        id="standard-search"
        label="Find github repo"
        type="search"
        margin="normal"
        onChange={onChange}
        inputProps={{
          onKeyDown
        }}
      />
      <SearchIconButton
        onClick={() => searchTerm.trim() && onSearch(searchTerm)}
        aria-label="search"
      >
        <SearchIcon />
      </SearchIconButton>
    </SearchWrapper>
  );
}

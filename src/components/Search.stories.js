/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import Search from './Search';

const StoryContainer = function(props) {
  return (
    <div
      css={css`
        border: 1px solid #e3e3e3;
        margin-bottom: 10px;
        border-radius: 4px;
        margin: 30px 50px 0 10px;
        width: 70%;
        max-width: 800px;
        padding: 20px;
      `}
    >
      <Search {...props} />
    </div>
  );
};

const onSearch = searchTerm => console.log({ searchTerm });

const stories = storiesOf('Search|search field', module);
stories
  .add('empty search field', () => (
    <StoryContainer loading={false} onSearch={onSearch} />
  ))
  .add('loading search field', () => <StoryContainer loading={true} />);

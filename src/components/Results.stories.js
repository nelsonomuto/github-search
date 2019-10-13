/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import Results from './Results';
import resultsData from '../stories.data/results.sample.json';
import { extractResults } from '../api';

const results = extractResults({ data: resultsData });

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
      <Results {...props} />
    </div>
  );
};

const onResults = ResultsTerm => console.log({ ResultsTerm });

const stories = storiesOf('Results|Results list', module);
stories
  .add('empty Results list', () => (
    <StoryContainer loading={false} onResults={onResults} />
  ))
  .add('Results list', () => (
    <StoryContainer loading={false} onResults={onResults} results={results} />
  ))
  .add('error Results list', () => (
    <StoryContainer loading={false} onResults={onResults} results={results} error={'Error message'} />
  ))
  .add('loading Results list', () => <StoryContainer loading={true} />);

import styled from '@emotion/styled';
import { TextField } from '@material-ui/core';
import { IconButton, LinearProgress } from '@material-ui/core';

export const SearchBarField = styled(TextField)`
  padding: 0 0 10px 0;
  grid-row: 2;
  grid-column: 1 / span 2;
`;

export const SearchBarWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr;
  grid-template-columns: 1fr 1fr;
  max-width: 500px;
`;

export const SearchBarLinearProgress = styled(LinearProgress)`
  grid-column: 1 / span 2;
`;
export const SearchBarIconButton = styled(IconButton)`
  grid-row: 2;
`;

export const ResultsGridWrapper = styled.div`
  .ag-root-wrapper.ag-layout-normal {
    height: 500px;
    .ag-header {
      background: whitesmoke;
      color: gray;
    }
  }
`;

export const Error = styled.h2`
  color: red;
  opacity: 0.7;
`;

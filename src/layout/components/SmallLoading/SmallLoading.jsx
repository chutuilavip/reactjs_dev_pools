import React from 'react';
import { SmallLoader, SmallLoadingWrapper } from './styled';

const SmallLoading = () => {
  return (
    <SmallLoadingWrapper className="loading">
      <SmallLoader></SmallLoader>
    </SmallLoadingWrapper>
  );
};

export default SmallLoading;

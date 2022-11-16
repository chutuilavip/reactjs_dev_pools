import React from 'react';
import { Loader, SwapLoading } from './styled';

const Loading = () => {
  return (
    <SwapLoading className="loading">
      <Loader></Loader>
    </SwapLoading>
  );
};

export default Loading;

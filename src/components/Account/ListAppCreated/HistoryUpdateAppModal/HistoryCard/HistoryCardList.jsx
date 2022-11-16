import React from 'react';
import HistoryCard from './HistoryCard';

const HistoryCardList = ({ historyUpdate }) => {
  return (
    <>
      {historyUpdate &&
        historyUpdate.map((data, index) => {
          return <HistoryCard key={`history-${index}`} data={data} />;
        })}
    </>
  );
};

export default HistoryCardList;

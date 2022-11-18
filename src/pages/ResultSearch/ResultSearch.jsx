import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Item from '../../components/SlideReview/Item';
import { getResultSearch } from '../../redux/slice/search.slice';

const ResultSearch = () => {
  const { isLoading, resultSearch } = useSelector((state) => state.resultSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(resultSearch);

  const key = location.search;

  const prevKey = resultSearch?.res?.prev_page_url?.split(
    'https://v2.poolsplay.store/api/application/search'
  );
  // .slice(1);

  const nextKey = resultSearch?.res?.next_page_url?.split(
    'https://v2.poolsplay.store/api/application/search'
  );
  // .slice(1);

  console.log(nextKey);

  const goToPosts = (params) => {
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(params)}`,
    });
  };

  useEffect(() => {
    dispatch(getResultSearch(key));
  }, [key]);

  return (
    <WrapPageSearch>
      <p className="key_search">
        There are <span style={{ color: 'yellow' }}>{resultSearch.res?.total}</span> search results
        for the keyword.
      </p>
      <StyledListResult>
        {resultSearch.res?.data?.map((item) => {
          return <Item key={item.id} data={item} />;
        })}
      </StyledListResult>

      <div className="pagi">
        {resultSearch.res?.last_page > 1 && (
          <StyledPagination
            status_pre={resultSearch?.res?.prev_page_url === null}
            status_nex={resultSearch?.res?.next_page_url === null}
          >
            <button
              className="btn_pre"
              disabled={resultSearch?.res?.prev_page_url === null}
              onClick={() => {
                goToPosts(prevKey[0]);
              }}
            >
              Prev
            </button>
            {[...Array(resultSearch.res?.last_page)]?.map((item, index) => {
              return (
                <div
                  style={{
                    color: `${resultSearch.res?.current_page === index + 1 ? 'yellow' : '#ccc'}`,
                  }}
                  key={index}
                >
                  {index + 1}
                </div>
              );
            })}
            <button
              className="btn_nex"
              disabled={resultSearch?.res?.next_page_url === null}
              onClick={() => {
                goToPosts(nextKey[0]);
              }}
            >
              Next
            </button>
            current_page
          </StyledPagination>
        )}
      </div>
    </WrapPageSearch>
  );
};

export default ResultSearch;

const WrapPageSearch = styled.div`
  background-color: #121212;
  width: 100%;
  padding-bottom: 90px;
  padding: 30px;
  min-height: calc(100vh - 289px - 93px);

  .key_search {
    color: white;
    font-weight: 700;
    font-size: 48px;
    position: relative;
    padding-bottom: 60px;
  }
  .pagi {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledListResult = styled.div`
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledPagination = styled.div`
  margin-top: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  padding: 20px;
  background-color: transparent;
  button {
    padding: 5px 15px;
    border-radius: 7px;
    background-color: #3b72fe;
    color: #ffffff;
    cursor: pointer;
  }
  .btn_pre {
    background-color: ${({ status_pre }) => (status_pre ? '#000000' : '#3b72fe')};
    cursor: ${({ status_pre }) => (status_pre ? 'no-drop' : 'pointer')};
  }
  .btn_nex {
    background-color: ${({ status_nex }) => (status_nex ? '#000000' : '#3b72fe')};
    cursor: ${({ status_nex }) => (status_nex ? 'no-drop' : 'pointer')};
  }
  div {
    color: white;
  }
`;

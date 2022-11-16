import { Input, Modal, Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../../../layout/components/Loading/Loading';
import {
  getAppHistoryUpdate,
  getCategoriesAndLanguage,
} from '../../../../redux/slice/detailApp.slice';
import HistoryCardList from './HistoryCard/HistoryCardList';

const HistoryUpdateAppModal = ({ onOk, onCancel }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const searchRef = useRef();
  const [historyParams, setHistoryParams] = useState({ keyword: '', locale: '' });
  const [defaultLocale, setDefaultLocale] = useState(null);
  const { historyUpdate, isLoadingGetHistory, statusGetHistory, languages, isLoading } =
    useSelector((state) => state.detailApp);
  const getHistoryUpdate = (locale) => {
    dispatch(
      getAppHistoryUpdate({
        appId: params.id,
        keyword: historyParams.keyword,
        locale: locale || historyParams.locale,
      })
    );
  };
  const getCategoryAndLanguage = () => {
    dispatch(getCategoriesAndLanguage())
      .unwrap()
      .then((res) => {
        getHistoryUpdate(res.language[0].code);
        setDefaultLocale(res.language[0].code);
      });
  };
  const handleSearch = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      setHistoryParams((prev) => ({ ...prev, keyword: e.target.value }));
    }, 1000);
  };
  const handleChangeLocale = (e) => {
    setHistoryParams((prev) => ({ ...prev, locale: e }));
  };
  useEffect(() => {
    getCategoryAndLanguage();
  }, []);
  useEffect(() => {
    if (!isLoading) {
      getHistoryUpdate();
    }
  }, [historyParams]);
  const renderOption = () => {
    let res =
      languages &&
      languages.map((item, index) => {
        return {
          key: index,
          value: item.code,
          label: item.language,
        };
      });
    return res;
  };
  console.log(defaultLocale);
  return (
    <div>
      <Modal title="History update of app" open={true} onOk={onOk} onCancel={onCancel}>
        {defaultLocale !== null && (
          <>
            <p>Choose Locale</p>
            <Select
              style={{
                width: '100%',
                margin: 'auto',
                marginBottom: '2rem',
              }}
              defaultValue={defaultLocale}
              onChange={handleChangeLocale}
              options={renderOption()}
            />
            <Input
              placeholder="Enter your App Version to find...."
              allowClear
              size="large"
              onChange={handleSearch}
              style={{
                marginBottom: '4rem',
                width: '50%',
                marginLeft: 'auto',
                borderRadius: '5px',
              }}
            />
            {isLoadingGetHistory && statusGetHistory !== 'success' ? (
              <Loading />
            ) : (
              <HistoryCardList historyUpdate={historyUpdate} />
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default HistoryUpdateAppModal;

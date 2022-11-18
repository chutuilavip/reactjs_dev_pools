import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListServices from '../../components/MyServices/ListServices/ListServices';
import Loading from '../../layout/components/Loading/Loading';
import { getMyServices } from '../../redux/slice/user.slice';
import { MyServicesWrapper } from './styled';

const MyServices = () => {
  const dispatch = useDispatch();
  const { isLoading, status, myServices } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getMyServices());
  }, []);
  return (
    <MyServicesWrapper>
      <h1 className="section_title">MY Services</h1>
      {isLoading && status.getMyServices !== 'success' ? (
        <Loading />
      ) : (
        <ListServices myServices={myServices} />
      )}
    </MyServicesWrapper>
  );
};

export default MyServices;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../layout/components/Loading/Loading';
import {
  editApp,
  getAppPermissionAndInfoCollection,
  getCategoriesAndLanguage,
  getDetailAppWithLange,
} from '../../redux/slice/detailApp.slice';
import EditAppProcess from './EditAppProcess/EditAppProcess';

const EditAppAPI = () => {
  /*Re-reneder
    1 - First render
    2-3-4 - Context change
    5- state - categoryAndLanguage change
    6 useSelector - isLoading 
     */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [forceRerender, setForceRerender] = useState(false);
  const dataRef = useRef();
  const categoryAndLanguage = useRef();
  const permissionAndInfo = useRef();

  const initialValue = useCallback(
    (locale) => {
      dispatch(getDetailAppWithLange({ slug: params?.slug, lang: locale }))
        .unwrap()
        .then((res) => {
          const { id, ...resData } = res?.data?.app;
          const data = Object.assign({ ...res?.data?.info } || {}, { ...resData });
          let defaultData = {
            locale: locale,
            title: data?.title || '',
            appid: data?.appid || '',
            summary: data?.summary || '',
            country_of_service: data?.country_of_service || '',
            category: data?.category || '',
            age_limit: data?.age_limit || '',
            free: data?.free || '',
            price: Number(data?.price).toFixed(0) || '',
            category: data?.category || '',
            recent_change: data?.recent_change || '',
            app_version: data?.app_version || '',
            privacy_policy: data?.privacy_policy || '',
            term_of_policy: data?.term_of_policy || '',
            app_support: data?.app_support || '',
            app_permission_id: data.app_permission_id?.split(',') || undefined,
            information_collected_id: data.information_collected_id?.split(',') || undefined,
            email: data.email || '',
            phone_number: data.phone_number || '',
            facebook: data.facebook || '',
            instagram: data.instagram || '',
            skype: data.skype || '',
            tiktok: data.tiktok || '',
            twitter: data.twitter || '',
            cover: [],
            images: [],
            apkfile: [],
            video: data?.video || null,
            cover_init: data?.cover || [],
            images_init: JSON.parse(data?.screenshots) || [],
            apkfile_init: data?.file_apk || [],
            video_init: data?.video || '',
            type: data?.type === '1' ? 'nft' : data?.type === '2' ? 'metaverse' : 'play-to-earn',
            full_description: data?.description || '',
            country_of_service: data?.country || '',
            otherlanguages: data?.other_languages || '',
            free: data?.is_pay || '',
          };

          dataRef.current = defaultData;
          console.log(data);
          setForceRerender((prev) => !prev);
        });
    },
    [dispatch, params]
  );
  const getCategoryAndLanguage = () => {
    dispatch(getCategoriesAndLanguage())
      .unwrap()
      .then((res) => {
        categoryAndLanguage.current = res;
        initialValue(res?.language[0]?.code);
      });
  };
  const redirectToAccount = () => {
    navigate('/for-publishers/created-app');
  };
  const onSubmit = (data) => {
    dispatch(editApp({ data: data, callBack: redirectToAccount }));
  };
  const getPermissionAndInfoCollection = () => {
    dispatch(getAppPermissionAndInfoCollection())
      .unwrap()
      .then((res) => {
        permissionAndInfo.current = res;
      });
  };
  useEffect(() => {
    getCategoryAndLanguage();
    getPermissionAndInfoCollection();
  }, []);

  if (!dataRef.current || !categoryAndLanguage.current || !permissionAndInfo.current)
    return <Loading />;
  return (
    <div>
      <EditAppProcess
        onSubmitAPI={onSubmit}
        defaultValues={dataRef.current}
        onInitialValue={initialValue}
        categoryAndLanguage={categoryAndLanguage.current}
        permissionAndInfo={permissionAndInfo.current}
      />
    </div>
  );
};

export default React.memo(EditAppAPI);

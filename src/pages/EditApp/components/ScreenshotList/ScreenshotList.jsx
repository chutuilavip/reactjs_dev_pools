import { Button, Image, Popconfirm } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteScreenshot } from '../../../../redux/slice/detailApp.slice';
import { URL_API } from '../../../../utils';

const ScreenshotList = ({ defaultValues }) => {
  const dispatch = useDispatch();
  const [forceRerender, setForceRerender] = React.useState(false);
  const cancel = (e) => {
    console.log(e);
  };
  const handleDeleteScreenshot = (imgUrl, appid) => {
    dispatch(
      deleteScreenshot({
        name_image: imgUrl,
        appid: appid,
        reload: () => {},
      })
    )
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          const index = defaultValues.images_init.findIndex((el) => el === imgUrl);
          if (index !== -1) {
            defaultValues.images_init.splice(index, 1);
            setForceRerender((prev) => !prev);
          }
        }
      });
  };
  return (
    <>
      {defaultValues.images_init?.map((image, index) => {
        return (
          <div className="image_action" key={`image_${index}`}>
            <Image
              className="image"
              style={{
                borderRadius: '1rem',
              }}
              preview={false}
              src={`${URL_API}${image}`}
              alt="cover"
            />
            <div className="button">
              <Popconfirm
                title="Are you sure to delete this image?"
                onConfirm={() => handleDeleteScreenshot(image, defaultValues?.appid)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ScreenshotList;

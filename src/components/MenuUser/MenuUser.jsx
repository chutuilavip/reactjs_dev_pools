import React, { useRef, useEffect } from 'react';
import edit_icon from '../../assets/Profile/edit_on_menu.png';
import avatar from '../../assets/Profile/Avatar.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ContentMenu, WrapMenuUser } from './styled';
import { CgLogOut } from 'react-icons/cg';
import useClickOutside from '../../hooks/useClickOutSide';
import { useDispatch, useSelector } from 'react-redux';
import { setShowPopup } from '../../redux/slice/customLayout.slice';
import { checkLogin, logOut } from '../../redux/slice/user.slice';

import { Avatar, Button } from 'antd';
import { URL_API } from '../../constants/constants';
import { getDefaultAvatarName } from '../../helpers';

export const IsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const MenuUser = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const navigater = useNavigate();

  const token = JSON.parse(localStorage.getItem('tokens'));
  const user = useSelector((state) => state.user.infoUser);

  // Get data user when login
  useEffect(() => {
    if (token) {
      dispatch(checkLogin(token));
    }
  }, [IsEmpty(user)]);

  useClickOutside(ref, () => {
    setShow(false);
  });

  const showSettingPopup = () => {
    dispatch(setShowPopup(true));
    setShow(false);
  };
  return (
    <WrapMenuUser show={show} ref={ref}>
      {token ? (
        <NavLink to="/account">
          {' '}
          <div className="avt">
            <div className="img_avatar">
              {user.avatar ? (
                <LazyLoadImage
                  src={`${URL_API}/${user.avatar}`}
                  alt="avatar"
                  width="100%"
                  style={{ boderRadius: '50%' }}
                />
              ) : (
                <Avatar
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  {getDefaultAvatarName(user?.first_name, user?.last_name)}
                </Avatar>
              )}
            </div>
            <div className="profile">
              <span className="title">Profile</span>
              <div>
                <span>
                  {user.first_name} {user.last_name}
                </span>
                <LazyLoadImage src={edit_icon} alt="icon" />
              </div>
            </div>
          </div>
        </NavLink>
      ) : (
        <Button
          style={{ width: '100%' }}
          type="primary"
          onClick={() => {
            navigater('/login');
          }}
        >
          Login
        </Button>
      )}

      {/* menu   */}
      <ContentMenu>
        {listMenu?.map((item, index) => {
          if (index === 2) {
            return (
              <div
                key={index}
                onClick={showSettingPopup}
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  paddingTop: '10px',
                  paddingLeft: '20px',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                {item.name}
              </div>
            );
          } else {
            return (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            );
          }
        })}
      </ContentMenu>
      <div className="logout_regis">
        {token ? (
          <div className="logout" style={{ marginLeft: '20px' }}>
            <CgLogOut />
            <span
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Log Out
            </span>
          </div>
        ) : (
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => {
              navigater('/register');
            }}
          >
            Register
          </Button>
        )}
      </div>
    </WrapMenuUser>
  );
};

export default MenuUser;

const listMenu = [
  // {
  //   name: 'Created App',
  //   path: '/created-app',
  // },
  // {
  //   name: 'My Services',
  //   path: '/my-services',
  // },
  // {
  //   name: "Setting",
  //   // path: "",
  // },
  // {
  //   name: "Friends",
  //   path: "/friends",
  // },
  // {
  //   name: "Suport",
  //   path: "/suport",
  // },
];

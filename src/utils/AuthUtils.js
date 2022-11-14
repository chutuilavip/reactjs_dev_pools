const logout = () => {
  localStorage.removeItem('tokens');
  goLogin();
};
const goLogin = () => {
  window.location = '/login';
};
const AuthUtil = {
  logout,
  goLogin,
};
export default AuthUtil;

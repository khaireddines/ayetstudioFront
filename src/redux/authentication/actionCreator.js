import Cookies from 'js-cookie';
import actions from './actions';
import api from '../../utility/api';
import { ACCOUNT_DETAILS, AUTH_PAYLOAD, GET_AUTH_TOKENS, USER_DETAILS } from '../../constants/endpoints';
import { removeItem, setItem } from '../../utility/localStorageControl';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, UserDetails, ApiDetails } = actions;

const GetUserDetails = () => {
  return async dispatch => {
    api.get(USER_DETAILS).then(res => {
      dispatch(UserDetails(res.data));
    });
    api.get(ACCOUNT_DETAILS).then(res => {
      dispatch(ApiDetails(res.data));
    });
  };
};
const login = ({ username, password }) => {
  return async dispatch => {
    dispatch(loginBegin());
    api
      .post(GET_AUTH_TOKENS, { ...AUTH_PAYLOAD, username, password })
      .then(res => {
        api.defaults.headers.common.authorization = `Bearer ${res.data.access_token}`;
        setItem('Auth', res.data);
        dispatch(loginSuccess(res.data));
      })
      .then(() => {
        dispatch(GetUserDetails());
      })
      .catch(err => {
        dispatch(loginErr(err.response.data));
      });
  };
};
const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      removeItem('Auth');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut, GetUserDetails };

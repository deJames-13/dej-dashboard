import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLogout from './useLogout';

export const useGetAuth = () => {
  const { userInfo, accessToken } = useSelector((state) => state.auth);
  return { userInfo, accessToken };
};

const useCheckAuth = (isPrivate = false) => {
  const { userInfo, accessToken } = useSelector((state) => state.auth);
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && userInfo?.id) {
      logout();
      return navigate('/');
    }
    if (userInfo && !isPrivate) {
      return navigate('/');
    } else if (!userInfo?.id && isPrivate) {
      return navigate('/login');
    }
  }, [navigate, userInfo, isPrivate, accessToken, logout]);

  return isPrivate || userInfo?.id ? userInfo : null;
};
export default useCheckAuth;

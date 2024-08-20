import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useCheckAuth = (isPrivate = false) => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && !isPrivate) {
      return navigate('/');
    } else if (!userInfo?.id && isPrivate) {
      return navigate('/login');
    }
  }, [navigate, userInfo, isPrivate]);

  return isPrivate || userInfo?.id ? userInfo : null;
};
export default useCheckAuth;

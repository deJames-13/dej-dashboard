import { authApi, logout as logoutAction } from '@features';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogoutAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = authApi.useLogoutMutation();

  const action = useCallback(async () => {
    await logout().unwrap();
    dispatch(logoutAction());
    navigate('/login');
  }, [dispatch, navigate, logout]);

  return action;
};

const useLogout = () => {
  const logout = useLogoutAction();
  const handleLogout = useCallback(
    async (e) => {
      e?.preventDefault();
      try {
        await logout();
        toast.success('Logged out successfully');
      } catch (error) {
        if ([401, 403].includes(error?.status)) return toast.error('Logged out due to unauthorized access');
        toast.error(error?.data?.message || 'Logout failed');
      }
    },
    [logout]
  );

  return handleLogout;
};
export default useLogout;

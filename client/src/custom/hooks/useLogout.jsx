import { authApi, logout as logoutAction } from '@features';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = authApi.useLogoutMutation();
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout().unwrap();
      dispatch(logoutAction());
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      if ([401, 403].includes(error?.status)) return toast.error('Logged out due to unauthorized access');
      toast.error(error?.data?.message || 'Logout failed');
    }
  };

  return handleLogout;
};
export default useLogout;

import { authApi, setCredentials } from '@features';
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
      dispatch(setCredentials(null));
      navigate('/');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error?.data?.message || 'Logout failed');
    }
  };

  return handleLogout;
};
export default useLogout;

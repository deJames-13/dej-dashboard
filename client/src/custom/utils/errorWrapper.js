import { toast } from 'react-toastify';

const errorWrapper = (fn, onError = () => {}) => {
  try {
    return fn();
  } catch (e) {
    console.log(e);
    const errors = e?.data?.errors?.details;
    if (Array.isArray(errors)) {
      errors.forEach((error) => {
        toast.error(error?.msg || 'Error while performing action');
      });
    } else toast.error(e?.data?.message || 'Error while performing action.');
    return onError(e);
  }
};

export default errorWrapper;


import { useCheckAuth, useLogout } from '@custom';
import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

export default function AuthLogout(buttonProps) {
  const handleLogout = useLogout();
  const userInfo = useCheckAuth(true);
  return (
    userInfo && (
      <form onSubmit={handleLogout}>
        <button
          type="submit"
          className="btn btn-primary btn-outline"
          {...buttonProps}
        >
          <FaArrowRightFromBracket />
          Log Out
        </button>
      </form>
    )
  );
}

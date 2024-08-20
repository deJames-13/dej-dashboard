import { useCheckAuth, useLogout } from '@custom';
import React from 'react';
import { Button } from 'react-daisyui';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

export default function AuthLogout(buttonProps) {
  const handleLogout = useLogout();
  const userInfo = useCheckAuth(true);
  return (
    userInfo && (
      <form onSubmit={handleLogout}>
        <Button
          type="submit"
          color="primary"
          variant="outline"
          {...buttonProps}
        >
          <FaArrowRightFromBracket />
          Log Out
        </Button>
      </form>
    )
  );
}

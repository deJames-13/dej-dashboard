import { useToggle } from '@common';
import { useCheckAuth } from '@custom';
import { DashboardHeader, FooterWrapper, Sidebar } from '@partials';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const [visible, toggleVisible] = useToggle(true);
  const userInfo = useCheckAuth(true) || {
    name: 'Private User',
  };
  return (
    userInfo?.id && (
      <div
        id="private-layout"
        className="flex w-screen h-screen overflow-y-auto "
      >
        <Sidebar
          visible={visible}
          noOverlay={true}
          toggleVisible={toggleVisible}
        >
          <DashboardHeader
            toggleVisible={toggleVisible}
            visible={!visible}
          />
          <div className="relative w-full">
            <div className="container grid min-h-screen mx-auto place-items-center">
              <Outlet context={{ userInfo }} />
            </div>
            <FooterWrapper />
          </div>
        </Sidebar>
      </div>
    )
  );
}

export default PrivateLayout;

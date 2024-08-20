import { useToggle } from '@common';
import { useCheckAuth } from '@custom';
import { FooterWrapper, Header, Sidebar } from '@partials';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const [visible, toggleVisible] = useToggle(false);
  const userInfo = useCheckAuth(true) || {
    name: 'Private User',
  };
  return (
    <div
      id="private-layout"
      className="flex w-screen h-screen overflow-y-auto "
    >
      <Sidebar
        visible={visible}
        toggleVisible={toggleVisible}
      >
        <div className="relative w-full">
          <Header clickLogo={toggleVisible()} />
          <div className="container grid min-h-screen mx-auto place-items-center">
            <Outlet context={{ userInfo }} />
          </div>
          <FooterWrapper />
        </div>
      </Sidebar>
    </div>
  );
}

export default PrivateLayout;

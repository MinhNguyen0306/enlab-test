import { Outlet } from 'react-router-dom';

import Header from '../../header/Header'
import "./MainLayout.scss";
import GlobalLoading from '../../globalLoading/GlobalLoading';

const MainLayout = () => {
  return (
    <>
      <GlobalLoading />
      <div className='wrapper'>
        <Header />
        <div className='wrapper__content container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout

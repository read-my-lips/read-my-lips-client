import { Outlet } from 'react-router-dom';
import TopBar from './TopBar/TopBar';

const Layout = () => {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    );
};

export default Layout;
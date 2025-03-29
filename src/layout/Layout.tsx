import { Outlet } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import { Box } from '@mui/material';

const Layout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <TopBar />
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
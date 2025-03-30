import { Outlet } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import { Box } from '@mui/material';
import * as styles from './layout.styles';

const Layout = () => {
    return (
        <Box sx={styles.layout}>
            <TopBar />
            <Box sx={styles.outlet}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
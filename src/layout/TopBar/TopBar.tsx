import { Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ flexGrow: 1, bgcolor: 'white' }}>
        <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4' sx={{ color: 'black' }}>
                    Read My Lips
                </Typography>
            </Box>
            <Box sx={{ marginInlineStart: 'auto', display: 'flex', flexDirection: 'row-reverse' }}>
                {routes.map((route, index) => (
                    <Button key={index} sx={{ marginInline: '1rem'}} onClick={() => navigate(route.path)}>
                    <Typography variant='h6' sx={{ color: 'black' }} >
                        {route.name}
                    </Typography>
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default TopBar;
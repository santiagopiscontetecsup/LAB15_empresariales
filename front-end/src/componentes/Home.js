import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { logout } from '../API/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4">
                    Bienvenido a mi pagina de Santiago de tokens
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                    sx={{ mt: 3 }}
                >
                    Cerrar Sesion
                </Button>
            </Box>
        </Container>
    );
};

export default Home;

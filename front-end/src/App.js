import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import PrivateRoute from './componentes/PrivateRoute';
import Home from './componentes/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;

import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import i18n from '../languageSelector/i18n';
import AppBarForm from './appBar';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../login/appSlice';
import { AppDispatch } from '../../login/store';

const AppBarContainer: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const currentParams = new URLSearchParams(location.search);
  const currentLanguage = currentParams.get('lang') || 'en';
  const [language, setLanguage] = useState(currentLanguage);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);

    currentParams.set('lang', selectedLanguage);
    navigate(`${location.pathname}?${currentParams.toString()}`);
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AppBarForm
      anchorElNav={anchorElNav}
      anchorElUser={anchorElUser}
      language={language}
      onOpenNavMenu={handleOpenNavMenu}
      onOpenUserMenu={handleOpenUserMenu}
      onCloseNavMenu={handleCloseNavMenu}
      onCloseUserMenu={handleCloseUserMenu}
      onLanguageChange={handleLanguageChange}
      onLogout={handleLogout} // Pass logout function to AppBarForm
    />
  );
};

export default AppBarContainer;

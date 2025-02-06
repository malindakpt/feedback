import React, { useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../services/auth/firebase';
import i18n from '../languageSelector/i18n';
import AppBarForm from './appBar';

const AppBarContainer: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState('en'); // Default language
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentParams = new URLSearchParams(location.search);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(userData.name || '');
          setUserAvatar(userData.profilePhoto || '');

        console.log("User logged in:", userData);
        console.log("User Name:", userData.name);
        console.log("User Profile Photo:", userData.profilePhoto);

        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
        setUserAvatar('');

        console.log("User not logged in or session expired.");
        
      }
    });

    return () => unsubscribe();
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
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

  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <AppBarForm
      language={language}
      userName={userName}
      userAvatar={userAvatar}
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      anchorElUser={anchorElUser}
      onOpenUserMenu={handleOpenUserMenu}
      onCloseUserMenu={handleCloseUserMenu}
      onLanguageChange={handleLanguageChange}
    />
  );
};

export default AppBarContainer;

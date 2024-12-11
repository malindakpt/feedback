import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { login } from './appSlice';
import { AppDispatch } from './store';
import i18n from '../../languageSelector/i18n';
import LoginForm from './loginForm';
// import LanguageSelector from '../../../components/languageSelector/languageSelector'; // Import the new component

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en'; 

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate(`/admin/branchView?lang=${lang}`);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  // const changeLanguage = (language: string) => {
  //   i18n.changeLanguage(language);
  //   setSearchParams({ lang: language });
  // };

  return (
    <>
      
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default LoginContainer;

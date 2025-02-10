import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';

type AppBarFormProps = {
  language: string;
  userName: string;
  userAvatar: string;
  isLoggedIn: boolean;
  onLogin: () => void;
  anchorElUser: HTMLElement | null;
  onOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseUserMenu: () => void;
  onLanguageChange: (event: SelectChangeEvent) => void;
};

const AppBarForm: React.FC<AppBarFormProps> = ({
  language,
  userName,
  userAvatar,
  isLoggedIn,
  onLogin,
  anchorElUser,
  onOpenUserMenu,
  onCloseUserMenu,
  onLanguageChange,
}) => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Corner Contents */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {/* Language Selector */}
            <FormControl sx={{ mr: 2, minWidth: 120 }}>
              <Select
                value={language}
                onChange={onLanguageChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select Language' }}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="si">සිංහල</MenuItem>
                <MenuItem value="ta">தமிழ்</MenuItem>
              </Select>
            </FormControl>

            {/* Conditional Rendering Based on Login State */}
            {isLoggedIn ? (
              <>
                <Typography variant="body1" sx={{ color: 'white', mr: 2 }}>
                  {userName || 'Guest'}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userName} src={userAvatar || '/static/images/avatar/default.jpg'} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={onCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={onCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={onLogin}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarForm;

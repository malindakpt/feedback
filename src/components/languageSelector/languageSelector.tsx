// LanguageSelector.tsx
import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

interface LanguageSelectorProps {
  lang: string;
  changeLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ lang, changeLanguage }) => {
  return (
    <div style={{ position: 'absolute', top: '1rem', right: '5rem' }}>
      <FormControl variant="outlined" size="small">
        <Select
          value={lang}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="si">සිංහල</MenuItem>
          <MenuItem value="ta">தமிழ்</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;

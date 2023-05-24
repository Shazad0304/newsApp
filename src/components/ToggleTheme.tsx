import React from 'react';
import { HStack, Text, Switch, useColorMode } from 'native-base';
import LocalizedText from './LocalizedText';

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <LocalizedText>{t => t("dark")}</LocalizedText>
        <Switch
          isChecked={colorMode === 'light'}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
          }
        />
        <LocalizedText>{t => t("light")}</LocalizedText>
      </HStack>
    );
  }

export default ToggleTheme;
  
import React, {useState} from 'react';
import {I18nManager} from 'react-native';
import {HStack, Switch, Text} from 'native-base';
import RNRestart from "react-native-restart"
import LocalizedText from './LocalizedTest';

type Languages = 'en' | 'ar';

const ToggleLanguage = () => {
  const [language, setLanguage] = useState<Languages>(I18nManager.isRTL ? "ar" : "en");

  return (
    <HStack space={2} alignItems="center">
      <LocalizedText>{t => t("arabic")}</LocalizedText>
      <Switch
        isChecked={language === 'en'}
        onToggle={() => {
          const newLang = language === 'en' ? 'ar' : 'en';
          setLanguage(newLang);
          I18nManager.forceRTL(newLang === 'ar');
          //RNRestart.restart();
        }}
        aria-label={
          language === 'en' ? 'switch to arabic' : 'switch to english'
        }
      />
      <LocalizedText>{t => t("english")}</LocalizedText>
    </HStack>
  );
};

export default ToggleLanguage;

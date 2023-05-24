import React, {useState} from 'react';
import {I18nManager} from 'react-native';
import {HStack, Switch, Text} from 'native-base';
import LocalizedText from './LocalizedText';
import {useSelector,useDispatch} from 'react-redux';
import { changeLanguage } from '../store/actions/lang';


type Languages = 'en' | 'ar';

const ToggleLanguage = () => {
  const {locale} = useSelector((state : any) => state.language);
  const dispatch = useDispatch();

  return (
    <HStack space={2} alignItems="center">
      <LocalizedText>{t => t("arabic")}</LocalizedText>
      <Switch
        isChecked={locale === 'en'}
        onToggle={() => {
          const newLang = locale === 'en' ? 'ar' : 'en';
          dispatch(changeLanguage(newLang));
          I18nManager.forceRTL(newLang === 'ar');
        }}
        aria-label={
          locale === 'en' ? 'switch to arabic' : 'switch to english'
        }
      />
      <LocalizedText>{t => t("english")}</LocalizedText>
    </HStack>
  );
};

export default ToggleLanguage;

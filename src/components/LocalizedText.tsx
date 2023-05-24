import {Text} from 'native-base';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import useTranslation from '../hooks/useTranslation';

interface LocalizedTextProps {
  children: React.ReactNode | ((t: (key: string) => string) => string);
  style?: StyleProp<TextStyle>;
}

const LocalizedText: React.FC<LocalizedTextProps> = ({style = {}, children}) => {
  const {translate} = useTranslation();

  return (
    <Text style={style}>
      {Array.isArray(children)
        ? children.map(child =>
            typeof child === 'function' ? child(translate) : child,
          )
        : typeof children === 'function'
        ? children(translate)
        : children}
    </Text>
  );
};

export default LocalizedText;

import { CHANGE_LANG } from './types';
export const changeLanguage = (lang : string) => {
  return {
    type: CHANGE_LANG,
    payload: lang
  }
}
import {I18n} from "i18n-js";
import { useCallback } from "react";
import {useSelector} from 'react-redux';

const getTranslations = () => {
    return {
        en: require("../utils/translations/en.json"),
        ar: require("../utils/translations/ar.json"),
    }
}

const useTranslation = () => {

    const {locale} = useSelector((state : any) => state.language);

    const i18n = new I18n(getTranslations(), {
        locale: locale
    });

    const translate = useCallback((key: string) => {
        return i18n.t(key)
    }, [locale]);

    return {translate};
}

export default useTranslation;
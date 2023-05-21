import {I18n} from "i18n-js";
import { useCallback } from "react";
import { I18nManager } from "react-native";

const getTranslations = () => {
    return {
        en: require("../utils/translations/en.json"),
        ar: require("../utils/translations/ar.json"),
    }
}

const i18n = new I18n(getTranslations(), {
    locale: I18nManager.isRTL ? "ar" : "en"
});

const useTranslation = () => {
    const translate = useCallback((key: string) => {
        return i18n.t(key)
    }, []);

    return {translate};
}

export default useTranslation;
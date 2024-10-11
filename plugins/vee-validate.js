import { defineRule, configure } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);

  defineRule("isPhone", (value) => {
    const phoneNumberRegex = /^(09)[0-9]{8}$/;
    return phoneNumberRegex.test(value) ? true : "需要正確的電話號碼";
  });

  configure({
    generateMessage: localize({ zh_TW: zhTW }),
  });

  setLocale("zh_TW");
});

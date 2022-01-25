import { DEBUG } from "../config"
import { mergeDeep } from "./base"

export function prepareLocaleStrings({
  lang,
  locales = { kr: {} },
  defaultLang = "kr",
} = {}) {
  return mergeDeep(mergeDeep({}, locales[defaultLang]), locales[lang] || {})
}

export default {
  install(Vue, opt) {
    Vue.mixin({
      data() {
        return {
          l: prepareLocaleStrings(opt),
        }
      },
    })
  },
}

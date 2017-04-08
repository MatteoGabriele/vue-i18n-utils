import translationTool from './component/translation-tool/index.vue'
import languageSwitcher from './component/language-switcher/index.vue'

export default function install (Vue, options = {}) {
  Vue.component('translation-tool', translationTool)
  Vue.component('language-switcher', languageSwitcher)
}

import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    message: 'This is a multi-language app.',
    language: 'Language',
    home : 'Home',
    contact : 'Contact',
    about :'About',
  },
  km: {
    welcome: 'សូមស្វាគមន៍',
    message: 'នេះជាកម្មវិធីពហុភាសា។',
    language: 'ភាសា',
    home : 'ទំព័រដើម',
    contact : 'ទំនាក់ទំនង',
    about :'អំពីយើង',
  }
}
const defaultLang = localStorage.getItem('lang') || 'en'
const i18n = createI18n({
  locale: defaultLang,
  fallbackLocale: 'en',
  messages
})
export default i18n

import { warn } from '../../utils'
import { events } from 'vue-i18n-manager'
import { mapGetters } from 'vuex'

export default {
  name: 'translation-tool',

  props: {
    label: {
      type: String,
      default: 'code'
    }
  },

  mounted () {
    this.$store.dispatch(events.SET_FORCE_TRANSLATION, true)
  },

  beforeDestroy () {
    this.$store.dispatch(events.SET_FORCE_TRANSLATION, false)
  },

  data () {
    return {
      isOpen: false
    }
  },

  computed: {
    ...mapGetters([
      'currentLanguage',
      'languageFilter',
      'languages',
      'availableLanguages'
    ])
  },

  methods: {
    isActive ({ code }) {
      return this.currentLanguage.code === code
    },

    close () {
      this.isOpen = false
    },

    filtered ({ code }) {
      return this.availableLanguages.filter(language => {
        return language.code === code
      }).length === 0
    },

    getLabel (language) {
      const label = language[this.label]

      if (!label) {
        warn(`Label "${this.label}" doesn't exist in the language with code "${language.code}"`)
        return language.code
      }

      return label
    },

    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}

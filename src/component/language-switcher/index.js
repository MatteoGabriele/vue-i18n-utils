export default {
  name: 'language-switcher',

  props: {
    label: {
      type: String,
      default: 'code'
    }
  },

  computed: {
    languages () {
      return this.$store.getters.availableLanguages
    }
  },

  methods: {
    getLabel (language) {
      const label = language[this.label]

      if (!label) {
        return language.code
      }

      return label
    }
  }
}

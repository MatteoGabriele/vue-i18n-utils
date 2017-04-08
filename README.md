# vue-i18n-utils

Collection of utility components for [vue-i18n-manager](https://github.com/MatteoGabriele/vue-i18n-manager)

## Installation

```bash
$ npm install vue-i18n-utils
```

## Usage

```js
import Vue from 'vue'
import VueI18nUtils from 'vue-i18n-utils'

Vue.use(VueI18nUtils)
```

```html
<translation-tool />
<language-switcher />
```

it is also possible to pass a `label` parameter (default value is `code`), and instead of displaing the code name of the languages, it's possible to display another property added to the language object in your vue-i18n-manager configuration object

```html
<translation label="name" />
<language-switcher label="name" />
```

## Docs

More about these components [here](https://matteogabriele.gitbooks.io/vue-i18n-manager/content/components.html)

# Issues and features requests
Please drop an issue, if you find something that doesn't work, or a feature request at https://github.com/MatteoGabriele/vue-i18n-utils/issues

Follow me on twitter [@matteo_gabriele](https://twitter.com/matteo_gabriele)

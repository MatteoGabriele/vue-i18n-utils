<script src="./index.js"></script>
<template>
  <div class="language-switcher">
    <div class="language-switcher-wrapper">
      <button
        class="button language"
        v-for="language in languages"
        @click="$setLanguage(language.code)">
          <span class="label">{{ getLabel(language) }}</span>
      </button>
    </div>
  </div>
</template>

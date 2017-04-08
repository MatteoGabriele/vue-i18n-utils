<script src="./index.js"></script>
<style module src="./index.css"></style>

<template>
  <div :class="$style.translationTool">
    <div :class="$style.languageContainer">
      <div @click="toggle" :class="$style.selectedLanguage">
        <span :class="isOpen ? $style.arrowActive : $style.arrow"></span>
        <p>Selected language: <b>{{ getLabel(currentLanguage) }}</b></p>
      </div>
      <div v-show="isOpen" :class="$style.buttonsWrapper">
        <button
          :class="isActive(language) ? $style.activeLanguage : $style.language"
          @click="$setLanguage(language.code)"
          v-for="language in languages">
            <span>{{ getLabel(language) }}</span>
            <span :title="filtered(language) ? 'Language is filtered' : 'Language is available'" :class="filtered(language) ? $style.filtered : $style.available"></span>
        </button>
      </div>
    </div>
  </div>
</template>

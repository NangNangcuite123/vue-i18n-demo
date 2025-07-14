<template>
    <site-header />
    <site-footer />
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/Footer.vue'
import { useI18n } from 'vue-i18n';
import { ref } from 'vue'

const { locale } = useI18n();
const lang = ref(locale.value)

function changeLang() {
  locale.value = lang.value
  localStorage.setItem('lang', lang.value)
}

// Bind single class
const activeClass = 'mark'

// Bind single style
const textColor = 'blue'

// Conditional class
const isActive = true

const styleObject = {
  width: '1200px',
  height: '400px',
  color: 'white',
  backgroundColor: 'gray',
  padding: '10px'
}
</script>

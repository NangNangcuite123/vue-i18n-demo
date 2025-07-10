<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" :class="activeClass">{{$t('home')}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{$t('contact')}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('about') }}</a>
        </li>
      </ul>
    <label class="">{{ $t('language') }}:</label>
    <select v-model="lang" @change="changeLang">
      <option value="en">English</option>
      <option value="km">ភាសាខ្មែរ</option>
    </select>
    </div>
  </div>
    </nav>
  </header>
  <main>
    <section class="mt-5">
      <div :style="styleObject">
        <h1 :style="{ color: textColor }">Vue + Bootstrap</h1>
        <h1>{{ $t('welcome') }}</h1>
        <p>{{ $t('message') }}</p>
        <button :class="{ active: isActive, disabled: !isActive }">
          Click Me
      </button>
      </div>
    </section>
  </main>
</template>
<script setup>
  import { useI18n  } from 'vue-i18n';
  import { ref } from 'vue'
  const { locale } = useI18n();
  const lang = ref(locale.value)

  function changeLang() {
    locale.value = lang.value
    localStorage.setItem('lang', lang.value)
  }
  // bind-single-class
  const activeClass = 'mark';
   // bind-single-class

  //  bind-single-style
  const textColor = 'blue'
  //  bind-single-style

  // Conditional class
  const isActive = true
  // Conditional class

  const styleObject = {
  width:'1200px',
  height:'400px',
  color: 'white',
  backgroundColor: 'gray',
  padding: '10px'

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

select {
  width: 100px;
  /* height: 60px; */
  padding: 5px 0px;
  margin-left: 10px;
}
h1,li,a,p{
  font-family: "Battambang",Poppins;
}
.mark{
  color: red;
  font-weight: bold;
}
.active {
  background: green;
}
.disabled {
  background: gray;
}
</style>

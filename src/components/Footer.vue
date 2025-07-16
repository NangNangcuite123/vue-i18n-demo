<template>
  <footer class="site-footer w-100">
    <div class="footer-content">
      <p>&copy; 2025 My Vue Site. All rights reserved.</p>
      <nav class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </footer>
</template>




<style scoped>
.site-footer {
  background-color: #222;
  color: white;
  padding: 20px 0;
  margin-top: 40px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #bbb;
  margin: 0 10px;
  text-decoration: none;
}

.footer-links a:hover {
  color: #fff;
}
</style>
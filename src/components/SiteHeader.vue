<template>
   <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a href="#" class="navbar-brand">
              Logo
            </a>
              <ul class="navbar-nav d-flex ">
                <li class="nav-item">
                  <router-link to="/" class="me-3 nav-link-no-underline">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="me-3 nav-link-no-underline">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link-no-underline">contact</router-link>
                </li>
              </ul>
            <div class="search">
              <input type="text" class="input-search me-3 rounded-2 border-0 ">
              <button class="btn btn-danger">
                Search
              </button>
            </div>
        </div>
      </nav>
      <!-- This is where the routed component will appear -->
      <router-view />
  </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
h1,li,a,p{
  font-family: "Battambang",Poppins;
}
.input-search{
  height: 35px;
  outline: none;
  border: 1px solid gray !important;
  padding-left: 10px;
}
.navbar{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.navbar-brand{
  font-size: 35px !important;
}
.nav-link-no-underline {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
}

</style>

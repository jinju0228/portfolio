<template>
<div class="menu_wrap">
  <!-- <router-link to='/intro'>home</router-link> -->
  <ul class="menu">
    <li id="mu_home" class="mu_home"><router-link to='/'><a><span class="mu mu_home">home</span></a></router-link></li>
    <li id="mu1"><router-link to='/about'><a><span class="mu mu1">about</span></a></router-link></li>
    <li id="mu2"><router-link to='/webclone'><a><span class="mu mu2">webclone</span></a></router-link></li>
    <li id="mu3"><router-link to='/project'><a><span class="mu mu3">project</span></a></router-link></li>
    <li id="mu4"><router-link to='/contact'><a><span class="mu mu4">contact</span></a></router-link></li>
  </ul>
  <div class="m_header">
    <a class="m_logo" href="#home"><router-link to='/'>home</router-link></a>
    <div id="myLinks">
      <ul>
        <li><router-link to='/about'>about</router-link></li>
        <li><router-link to='/webclone'>webclone</router-link></li>
        <li><router-link to='/project'>project</router-link></li>
        <li><router-link to='/contact'>contact</router-link></li>
      </ul>
    </div>

    <a id="m_menu" href="javascript:void(0);" class="icon">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>





<router-view>
  
</router-view>

</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  overflow-x:hidden;
}
</style>

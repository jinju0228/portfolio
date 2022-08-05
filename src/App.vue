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
 <!-- <a class="m_logo" href="#home"></a> -->
   <router-link to='/'><a class="m_logo"></a></router-link>
    <div id="myLinks">
      <ul>
        <li><router-link to='/about'>ABOUT</router-link></li>
        <li><router-link to='/webclone'>WEB-CLONE</router-link></li>
        <li><router-link to='/project'>PROJECT</router-link></li>
        <li><router-link to='/contact'>CONTACT</router-link></li>
      </ul>
    </div>

    <a id="m_menu" href="javascript:void(0);" class="icon">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>





<router-view :key="$route.fullPath">
  
</router-view>

</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
//     mounted() {
//     window.addEventListener('beforeunload', this.unLoadEvent);
//   },
//   beforeUnmount() {
//     window.removeEventListener('beforeunload', this.unLoadEvent);
//   },

  
//   methods: {

// unLoadEvent: function (event) {
//       if (this.isLeaveSite) return;
//        event.preventDefault();
//        event.returnValue = '';
//     },

//   }
        
        
    }








  
  

  

</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family:'Avenir LT Std 45 Book Book,BebasNeue Book,NanumBarunGothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  overflow-x:hidden;
  
}

@font-face {
  font-family:'NanumBarunGothic';
  src: url('/public/fonts/NanumBarunGothic.ttf');
}
@font-face {
  font-family:'BebasNeue Book';
  src: url('/public/fonts/BebasNeue Book.ttf');
}

@font-face{
    font-family:'Avenir LT Std 45 Book Book';
  src: url('/public/fonts/Avenir LT Std 45 Book.otf');
}
</style>

<template>
  <div class="about_back">
    <div class="common_title about_title"><span>ABOUT ME</span></div>
    <section class="common_contents about_contents">
        <article class="plz">
          <div class="yellow yellow1"><div></div></div>
          <div class="yellow yellow2"><div></div></div>
          <div class="yellow yellow3"><div></div></div>
          <div class="yellow yellow4"><div></div></div>                
          <div class="about_poaster">
            <div class="apoaster_wrap">
              <h4 class="poaster1">Welcome to my page</h4>
              <h4 class="poaster2">I enjoy exploring,<br>the infinite digital universe</h4>
            </div>
          </div>      
        </article>
        <article class="art1">
            <div class="black_line"><span>Frontend Developer</span></div>
            <div class="front">
                <div class="my_img"><img src="img/my_img2.jpeg"></div>
                <div>
                  <ul class="my_info">
                    <li class="name">박진주</li>
                    <li class="name">PARK JINJU</li>
                    <li v-for="(info,index) in myinfo" :key="index" >{{info}}</li>
                    </ul>
                </div>
            </div>
        </article>
        <article class="art2">
            <div class="black_line"><span>Education  & Certificate</span></div>
            <form class="edu"> 
                <p class="sub_title"><span></span>Education</p>
                <table class="edu_table">
                    <tr v-for="education in education" :key="education" >
                        <td>{{education.date}}</td>
                        <td>{{education.subject}}</td>
                        <td>{{education.place}}</td>
                        <td>{{education.complete}}</td>
                    </tr>
                </table>
            </form>
            <form class="cer"> 
                <p class="sub_title"><span></span>Certificate</p>
                <table class="cer_table">
                  <tr v-for="certification in certificate" :key="certification" >
                    <td class="cer_date">{{certification.date}}</td>
                    <td class="cer_name">{{certification.cerName}}</td>
                  </tr>
                </table>
            </form>
        </article>
        <article class="art3">
            <div class="black_line"><span>Used Tool  & Skill</span></div>
            <div class="tool_wrap">
                <p class="sub_title"><span></span>Tool</p>
                <ul class="tool">
                    <li v-for="(icon, index) in tool" :key="index"><img :src="icon.toolUrl" /></li>
                </ul>
            </div>
            <div class="skill_wrap">
                <p class="sub_title"><span></span>Skill</p>
                <ul class="skill">
                    <li v-for="(icon, index) in skill" :key="index"><img :src="icon.skillUrl" /></li>
                </ul>
            </div>
        </article>
        <div class="bottom">
          <div class="fish_wrap">
            <div class="fish"></div>
            <div class="go_top" @click="goTop">&#8592;go top</div>
          </div>
          <a href="https://github.com/jinju0228" target='_blank'>Git Hub :jinju0228</a>
        </div>       
    </section>
      
    
  </div>

</template>






<script>
export default {
  name: 'about-page',
  data:function() {
return {
   myinfo:['1996.02.28 Yangpyeong','010-8758-9982','jinjuuu02@gmail.com','성신여자대학교, 청정융합과학과'],
  education:[{date:'2022.02.22 ~ 08.16',subject:'[디지털컨버전스] 스마트_뷰(Vue)활용프론트엔드 웹개발자 양성과정', place:'노원 그린 컴퓨터',complete:'수료 예정'},{date:'2021.12.02 ~ 12.30',subject:'[시각디자인] 출판편집(포토샵, 일러스트)',place:'종로 그린 컴퓨터',complete:'수료'}],
  certificate:[{date:'2020.07',cerName:'컴퓨터활용능력 1급'},{date:'2022.01',cerName:'GTQ 1급'}],
  tool:[{toolUrl: "../img/1.png"},{toolUrl: "../img/2.png"},{toolUrl: "../img/3.png"},{toolUrl: "../img/4.png"},{toolUrl: "../img/5.png"},{toolUrl: "../img/6.png"},{toolUrl: "../img/7.png"},{toolUrl: "../img/8.png"},{toolUrl: "../img/9.png"},{toolUrl: "../img/firebase.png"},{toolUrl: "../img/10.png"}],  
  skill:[{skillUrl: "../img/icon1.png"},{skillUrl: "../img/icon2.png"},{skillUrl: "../img/icon3.webp"},{skillUrl: "../img/icon4.png"},{skillUrl: "../img/icon5.png"},{skillUrl: "../img/icon6.png"},{skillUrl: "../img/icon7.png"}],
  scrollY: 0
}
},

 mounted() {


},methods: {
  goTop: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },

}




}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu>li:first-child{
  position:absolute;
  left:0;
}





</style>

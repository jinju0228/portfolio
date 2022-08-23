<template>
 <div class="project_back">
    <div class="common_title project_title"><span>PROJECT</span></div>
    <section class="common_contents project_contents">
        <article class="plz plzleft">
            <div class="project_wrap">
                <div class="ppoaster_wrap">
                  <p class="pro_poaster1">The projects</p>
                  <p class="pro_poaster2">are a renewal</p>
                  <p class="pro_poaster3">of the website</p>
                </div>
                <div class="circle"><div></div></div>
            </div>
        </article>
        <article id="" class="web_art1 project_art1" v-for='project in one' :key="project">
            <div class="one_wrap">
                <div>
                    <div class="black_line project_line"><span>1.5Month +  α</span><i>#WEB SITE</i> </div>
                    <div class="clone_title">
                        <h4>{{project.titleE}}<span>{{project.titleK}}</span></h4>
                        <h5>{{project.company}}</h5>
                    </div>
                </div>
                <div class="one">
                    <div class="one_img"><div><img :src="project.projectUrl"></div></div>
                    <div class="one_txt">
                        <div class="subBox">
                            <h5>Project Type</h5>
                            <span>{{project.type}}</span>
                        </div>
                        <div class="subBox">
                            <h5>Role</h5>
                            <span>{{project.role}}</span>
                        </div>
                        <div class="subBox">
                            <h5>Skill</h5>
                            <span v-for='(list,index) in project.skill' :key="index">{{list}}</span>
                        </div>
                        <div class="subBox">
                            <h5>Check Point</h5>
                            <span v-for='(list,index) in project.check' :key="index">{{list}}</span>
                        </div>                    
                    </div>
                     <div class="one_bottom">
                        <div class="one_info">
                            <div class="heroku_wrap">
                                <div><img class="heroku" src="img/9.png"></div>
                                <a v-bind:href="project.heroku" target='_blank'><span>{{project.heroku}}</span></a>
                            </div>
                            <div class="github_wrap">
                                <div><img class="github" src="img/8.png"></div>
                                <a v-bind:href="project.github" target='_blank'>{{project.github}}</a>
                            </div>
                            <div class="mockup_wrap">
                                <button class="mock_button" @click="mockup" type="button">MOCKUP CLICK</button>
                            </div>
                        </div>
                        <div class="one_overview">
                            <div>
                                <h5>Overview</h5>
                                <span>{{project.overview}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mobile_oneInfo">
                        <a v-bind:href="project.heroku"><img src="img/9.png"></a>
                        <a v-bind:href="project.github"><img src="img/8.png"></a>
                        <a class="mmock_button" @click="handle_toggle" type="button">MOCKUP CLICK</a>
                    </div>
                </div>
            </div>
            <div class="mock_popup" v-show="is_show">
                <div class="mock_title">
                    <i @click="handle_toggle" class="X"></i>
                    <!-- <p>{{project.titleE}}<span>MOCKUP</span><i @click="handle_toggle">X</i></p> -->
                </div>
                <div class="mock_img"> 
                    <img :src="project.mockupUrl">
                </div>
            </div>   
        </article>
        <div class="bottom">
          <div class="fish_wrap">
            <div class="fish"></div>
            <div class="go_top" @click="goTop3">&#8592; go top</div>
          </div>
          <a href="https://github.com/jinju0228" target='_blank'>Git Hub :jinju0228</a>
        </div>

    </section>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: 'project-page',
  data:function() {
return {
 one:[{titleE:'NIGHTSEOMUN ',titleK:'서문시장야시장',company:'대구에 위치한 총거리 350M에 달하는 대형 야시장', projectUrl:"../img/seomun.png",type:'Personal project',role:'All',skill:['HTML','CSS','VsCode', 'Mysql','Node.js','Heroku','Github'],check:['Video','DB(GET/POST)','Kakao Login API','Resposive'],heroku:"https://nightmarketseomun.herokuapp.com/",github:'https://github.com/jinju0228/nmarket.git',overview:'설계부터 구현까지 혼자 해본 첫 번째 프로젝트. 마음에 쏙 드는 결과물은 아니지만 6개월 얼마나 성장했는지 보여줄 수 있는 프로젝트라고 생각한다. ',mockupUrl:'../img/SEOMUN_MOCKUP.png'},
 {titleE:'HEYNATURE',titleK:'헤이네이처',company:'자연주의 화장품 브랜드',projectUrl:'../img/heynature.png',type:'Team Project',role:'Main page + α(supplementation)', skill:['HTML','CSS','JavaScript','JQuery','VsCode', 'Mysql','Node.js','Heroku','Github'],check:['Scrollify','DB(GET/POST)','Animation','Swiper slide','Responsive'], heroku:'https://heynature.herokuapp.com/', github:'https://github.com/jinju0228/heynature_update_ver.git',overview:'소통의 중요성을 느낄 수 있었던 팀 프로젝트. 한달 반 동안 우여곡절이 많았지만 그만큼 배운게 많았다. ', mockupUrl:'../img/heynature_mockup.jpg'}
  ],
  is_show: false
        }
},        

    methods: {
        // handle_toggle: function(){
        //     this.is_show = !this.is_show;
        // },
         goTop3: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    mockup: function(){
    document.querySelectorAll(".mock_button")[0].addEventListener("click", function(){
    document.querySelectorAll(".mock_popup")[0].style.display="block";
});
 document.querySelectorAll(".mmock_button")[0].addEventListener("click", function(){
    document.querySelectorAll(".mock_popup")[0].style.display="block";
});
document.querySelectorAll(".X")[0].addEventListener("click", function (){
    document.querySelectorAll(".mock_popup")[0].style.display="none";
})

document.querySelectorAll(".mock_button")[1].addEventListener("click", function(){
    document.querySelectorAll(".mock_popup")[1].style.display ="block"
});
document.querySelectorAll(".mmock_button")[1].addEventListener("click", function(){
    document.querySelectorAll(".mock_popup")[1].style.display ="block"
});
document.querySelectorAll(".X")[1].addEventListener("click", function (){
    document.querySelectorAll(".mock_popup")[1].style.display="none";
})}
    
    
   
 
 }}

</script>

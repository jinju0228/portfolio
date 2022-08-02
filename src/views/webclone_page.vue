<template>
 <div class="webclone_back">
    <div class="b_circle">
        <div></div>
    </div>
    <div class="whale">
        <div></div>
    </div>

    
    <div class="common_title webclone_title"><span>WEB - CLONE</span></div>
    <section class="common_contents webclone_contents">
        <article class="plz">
            <div class="webclone_wrap">
                <div class="wpoaster_wrap ">
                  <h2 class="web_poaster1">I’m a creative person</h2>
                  <h2 class="web_poaster2">that is leading people</h2>
                  <h2 class="web_poaster3">into a digital world</h2>
                </div>
            </div>
        </article>
        <article class="web_art1" v-for='clone in one' :key="clone" >
            <div class="one_wrap">
                <div>
                    <div class="black_line web_line"><span>1Month +  α</span><i>#WEB SITE</i> </div>
                    <div class="clone_title">
                        <h4>{{clone.titleE}}<span>{{clone.titleK}}</span></h4>
                        <h5>{{clone.company}}</h5>
                    </div>
                </div>
                <div class="one">
                    <div class="one_img"><div><img :src="clone.cloneUrl"></div></div>
                    <div class="one_txt">
                        <div class="subBox">
                            <h5>Project Type</h5>
                            <span>{{clone.type}}</span>
                        </div>
                        <div class="subBox">
                            <h5>Skill</h5>
                            <span v-for='(list,index) in clone.skill' :key="index">{{list}}</span>
                        </div>
                        <div class="subBox">
                            <h5>Check Point</h5>
                            <span v-for='(list,index) in clone.check' :key="index">{{list}}</span>
                        </div>                    
                    </div>
                     <div class="one_bottom">
                        <div class="one_info">
                            <div class="heroku_wrap">
                                <div><img class="heroku" src="img/9.png"></div>
                                <a  v-bind:href="clone.heroku">{{clone.heroku}}</a>
                            </div>
                            <div class="github_wrap">
                                <div><img class="github" src="img/8.png"></div>
                                <a v-bind:href="clone.github" >{{clone.github}}</a>
                            </div>
                        </div>
                        <div class="one_overview">
                            <div>
                                <h5>Overview</h5>
                                <span>{{clone.overview}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mobile_oneInfo">
                        <a v-bind:href="heroku"><img src="img/9.png"></a>
                        <a v-bind:href="github"><img src="img/8.png"></a>
                    </div>
                </div>
            </div>   
        </article>
        <div class="bottom">
          <div class="fish_wrap">
            <div class="fish"></div>
            <div class="go_top">&#8592;go top</div>
          </div>
          <p>Git Hub :jinju0228</p>
        </div>  
    </section>
 </div>
</template>
<script>
export default {
  name: 'webclone-page',
  data:function() {
return {
 one:[{titleE:'SHOUSE GARDEN',titleK:'싱그러운 집',company:'PLANT INTERIOR', cloneUrl:"../img/shouse.png",type:'Personal webclone project',skill:['HTML','CSS','JavaScript','VsCode'],check:['Swiper slide','Resposive'],heroku:"https://www.naver.com/",github:'//github.com/jinju0228/pollexzone.git',overview:'HTML · CSS 배우고 시작한 첫 번째 웹클론 프로젝트JavaScript 배운 후 적용하는데, 의미없는 코드를 수정 해야 했다. 코드의 중요성을 배울 수 있었다.'},
 {titleE:'DCAF',titleK:'대전문화재단',company:'DAEJEON CULTURE & ARTS FOUNDATION', cloneUrl:"../img/dcaf.png",type:'Personal webclone project',skill:['HTML','CSS','JavaScript','VsCode'],check:['Swiper slide','Hover','Animation','ScrollEvent','Resposive'],heroku:"https://nightmarketseomun.herokuapp.com/",github:'//github.com/jinju0228/pollexzone.git',overview:'코드를 구성할 때부터 어떤 효과를 넣을 건지를 계산해야한다는것을 클론코딩할 때 느꼈다. '},
 {titleE:'POLLEXZONE',titleK:'폴렉스존',company:'MARKETING SOLUTION FOUNDATION', cloneUrl:"../img/pollexzone.png",type:'Personal webclone project',skill:['HTML','CSS','JavaScript','VsCode'],check:['Fade In','Scroll Event','Hover','Responsive','Svg','Resposive'],heroku:"https://nightmarketseomun.herokuapp.com/",github:'//github.com/jinju0228/pollexzone.git',overview:'SVG로 글씨 써지는 효과, 스크롤 시 Fade in되는 효과, Hover효과 등 연습할 수 있었던 프로젝트. 스크립트도 많이 사용해 볼 수 있었다.  '}

  ]
}
}

}


</script>
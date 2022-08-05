<template>
 <div class="contact_back">
        <div class="common_title contact_title"><span>CONTACT</span></div>
            <div class="wave_wrap">
                <div class="wave1"><div></div></div>
                <div class="wave2"><div></div></div>
            </div>
        <section class="common_contents contact_contents">
        <article class="plz">
            <div class="contact_wrap">
                <div class="cpoaster_wrap">
                  <p class="contact_poaster1">What are you</p>
                  <p class="contact_poaster2">Looking</p>
                  <p class="contact_poaster3">for?</p>
                </div>
            </div>
        </article>
        <article class="contact_art1">
            <div class="contact_txt">
                <p>Ask me anything or let me know</p>
                <p class="go_right">an idea you’d like to try  with me</p>
                <p>and I will get back to you ASAP</p>
            </div>
            <div class="contact_info">
                <div class="info_lte">
                    <div>
                        <span class="lte_title">Name</span>
                        <b>박진주</b>
                    </div>
                    <div>
                        <sapn class="lte_title">Location</sapn>
                        <b>경기도  양평군</b>
                    </div>
                    <div>
                        <sapn class="lte_title">Tel</sapn>
                        <b>010-8758-9982</b>
                    </div>
                    <div>
                        <sapn class="lte_title">EㅡMail</sapn>
                        <b><a href='mailto:jin_ju28@daum.net'>jin_ju28@daum.net</a></b>
                    </div>
                    <div>                        
                        <sapn class="lte_title">Git-Hub</sapn>
                        <b><a href="https://github.com/jinju0228" target='_blank'>jin_ju0228</a></b>
                    </div>
                </div>
                <div class="info_gr">
                    <div class="gr_r">
                        <a href="img/박진주(프론트엔드)_이력서.hwp" download>이력서 다운로드</a>
                    </div>
                </div>
                
            </div>
        </article>
        <div class="bottom contact_bottom">
          <div class="fish_wrap">
            <div class="white_fish"></div>
            <div class="go_top" @click="goTop4">&#8592; go top</div>
          </div>
          <a href="https://github.com/jinju0228" target='_blank'>Git Hub :jinju0228</a>
        </div>
    </section>
    
  </div>
</template>
<script>
export default {
  name: 'contact-page',
  data:function() {
return {
 
}
},
methods: {
  goTop4: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

}
</script>
<template>
 <div class="intro_back">
    <div class="intro_title">
        <h2>CREATIVE</h2>
        <h2>DEVELOPER</h2>
        <p>SENSIBLE TO FRONTEND</p>
    </div>
    <div class=intro_img>
      <div class="moon">
        <div class="people"></div>
      </div>
    </div>
    <div class="intro_footer">
      <div class="ifoot1">
        <span>T</span>
        <b>010-8758-9982</b>
      </div>
      <div>
        <span>E</span>
        <b>jin_ju28@daum.net</b>
      </div>
    </div>
  </div>
</template>
<style>

  .intro_back{
    position:relative;
    width:100vw;
    height:100vh;
    background-color: #F7EA49;
  }
  .intro_title{
    padding:165px 0 0 120px;
    text-align:left;
  }
  .intro_title>h2{
    margin-bottom:50px;
    font-size:45px;
    font-weight:bold;
  }
  .intro_title>p{
    font-size:45px;
    font-weight:lighter;
  }
  .intro_footer{
    display:flex;
    position:absolute;
    bottom:35px;
    left:120px;
    font-size:16px;
  }
  .intro_footer span{
    margin-right:20px;
  }
  .ifoot1{
    margin-right:80px;
  }
  .intro_footer b{
      font-weight:lighter;
      letter-spacing: 4px;
  }

  .intro_img{
    position:absolute;
    right:380px;
    bottom:60px;
    width:40%;
    animation: moon .5s infinite;
 }
.moon{
  width:100%;
  padding-top:100.427%;
  background-image:url('/public/img/moon+people.png');background-repeat: no-repeat;
  background-size:100% auto;
  background-position: center center;
}
@keyframes moon{
  from {rotate: 0deg}
  to { rotate: 90deg}
}


  @media only screen and (max-width: 1200px) {
.intro_title {
    padding: 120px 0 0 60px;
}
  .intro_title>h2{
    margin-bottom: 20px;
    font-size: 4vw;
    }
  .intro_title>p{
    font-size: 4vw;
  }
  .intro_img{
    width: 40%;
  }
  .intro_footer{
    font-size: 1.5vw;
}

  }

  @media only screen and (max-width: 1000px) {
  .intro_img{
    right: 50%;
    transform: translate( +50%, 0);
  }
  .intro_footer{
    left:50%;
    transform: translate(-50%, 0);
  }
  }
</style>

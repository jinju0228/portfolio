


window.onload = function() {


    // var mockBtn = document.querySelectorAll(".mock_button");
    // var mmockBtn = document.querySelectorAll(".mmock_button");
    // var mockClose = document.querySelectorAll(".X");
    // for(let i = 0; i < mockBtn.length ; i++){
    //     mockBtn[i].addEventListener("click", function(){
    //     document.querySelectorAll(".mock_popup")[i].style.display="block";
    // })
    //     mockClose[i].addEventListener("click", function(){
    //     document.querySelectorAll(".mock_popup")[i].style.display="none";
    // })
    // }
    // for(let i = 0; i < mmockBtn.length ; i++){
    // mmockBtn[i].addEventListener("click", function(){
    // document.querySelectorAll(".mock_popup")[i].style.display="block";
    // })
    // mockClose[i].addEventListener("click", function(){
    // document.querySelectorAll(".mock_popup")[i].style.display="none";
    // })
    
    // }


    var mu_home = document.getElementById('mu_home')
    var mu1 = document.getElementById('mu1')
    mu_home.style.display = "none"
    mu_home.onclick = function (){
        mu_home.style.display = "none"
        mu1.classList.remove('goleft1')
        mu2.classList.remove('goleft2')
        mu3.classList.remove('goleft3')
        mu4.classList.remove('goleft4')
    }   
    mu1.onclick = function() {
        mu_home.style.display = "block"
        mu1.classList.add('goleft1')
        mu2.classList.remove('goleft2')
        mu3.classList.remove('goleft3')
        mu4.classList.remove('goleft4')
    }
    var mu2 = document.getElementById('mu2')
    mu2.onclick = function(){
        mu_home.style.display = "block"
        mu1.classList.add('goleft1')
        mu2.classList.add('goleft2')
        mu3.classList.remove('goleft3')
        mu4.classList.remove('goleft4')
    }
    var mu3 = document.getElementById('mu3')
    mu3.onclick = function(){
        mu_home.style.display = "block"
        mu1.classList.add('goleft1')
        mu2.classList.add('goleft2')
        mu3.classList.add('goleft3')
        mu4.classList.remove('goleft4')
    }
    var mu4 = document.getElementById('mu4')
    mu4.onclick = function(){
        mu_home.style.display = "block"
        mu1.classList.add('goleft1')
        mu2.classList.add('goleft2')
        mu3.classList.add('goleft3')
        mu4.classList.add('goleft4')
 }



var mmenu = document.getElementById('m_menu');
mmenu.onclick = function(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

var animation = function () {
    var items, winH;
    var initModule = function () {
      items = document.querySelectorAll(".Art");
      winH = window.innerHeight;
      _addEventHandlers();
    }
    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };
   var _checkPosition = function flip(){
     for(let i = 0; i < items.length; i++){
       var artTop = items[i].getBoundingClientRect().top;
       if (winH > artTop) {
        items[i].classList.add('fadein')
        // alert('확인')

      }
    }
       }
   return {
     init4: initModule
   }
  }
  animation().init4();
}






















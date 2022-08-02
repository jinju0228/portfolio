


window.onload = function() {
    var mu_home = document.getElementById('mu_home')
    var mu1 = document.getElementById('mu1')
    mu_home.style.display = "none"
    mu_home.onclick = function (){
        mu_home.style.display = "none"
        mu1.classList.remove('goleft1')
        mu2.classList.remove('goleft2')
        mu3.classList.remove('goleft3')
        mu4.classList.remove('goleft4')
        mu1.classList.remove('born')
        mu2.classList.remove('born')
        mu3.classList.remove('born')
        mu4.classList.remove('born')

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


}
